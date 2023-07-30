import axios from "axios";
import userActionTypes from "./user.type";
axios.defaults.withCredentials = true;
//------------------USER--------------------
export const fetchUser = (payload) => ({
  type: userActionTypes.FETCH_USER,
  payload: payload,
});

export const logoutUser = () => ({
  type: userActionTypes.LOGOUT_USER,
});

export const loginSuccess = (user) => ({
  type: userActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const googleLoginSuccess = (user) => ({
  type: userActionTypes.LOGIN_WITH_GOOGLE,
  payload: user,
});
//------------------Plaid--------------------
export const getAccessToken = (access_token, item_id) => ({
  type: userActionTypes.GET_ACCESS_TOKEN,
  payload: {
    access_token: access_token,
    item_id: item_id,
  },
});

// export const getAccounts = (accounts) => ({
//   type: userActionTypes.GET_ACCOUNT,
//   payload: accounts,
// });
//------------------Transactions--------------------
// export const getTransactions = (transactions) => ({
//   type: userActionTypes.GET_TRANS,
//   payload: transactions,
// });

//----------------Expenses Actions----------------

// export const getExpenses = (expenses) => ({
//   type: userActionTypes.GET_EXPENSES,
//   payload: expenses,
// });
// export const createExpenses = (expenses) => ({
//   type: userActionTypes.CREATE_OR_UPDATE_EXPENSES,
//   payload: expenses,
// });
// export const updateAExpense = (expense) => ({
//   type: userActionTypes.UPDATE_A_EXPENSES,
//   payload: expense,
// });
// export const deleteAExpense = (expense) => ({
//   type: userActionTypes.DELETE_EXPENSE,
//   payload: expense,
// });
// export const addExpense = (expense) => ({
//   type: userActionTypes.ADD_EXPENSE,
//   payload: expense,
// });

// ---------------------Budget Actions-------------------------

// export const getExpenseOfBudget = (expenseBudgetTotal) => ({
//   type: userActionTypes.GET_BUDGET_EXPENSE_TOTAL_AMOUNT,
//   payload: expenseBudgetTotal,
// });

// export const addBudget = (budgetinfo) => ({
//   type: userActionTypes.ADD_BUDGET,
//   payload: budgetinfo,
// });

// export const getBudget = (budgets) => ({
//   type: userActionTypes.GET_BUDGET,
//   payload: budgets,
// });

// export const getBudgetName = (budgetName) => ({
//   type: userActionTypes.GET_BUDGET_NAMES,
//   payload: budgetName,
// });

// export const getBudgetAmount = (budgetAmount) => ({
//   type: userActionTypes.GET_BUDGET_TOTAL_AMOUNT,
//   payload: budgetAmount,
// });

// export const deleteABudget = (budget) => ({
//   type: userActionTypes.DELETE_A_BUDGET,
//   payload: budget,
// });

//-------------------------------------Thunks----------------------------------------

export const fetchUserThunk = () => {
  return async (dispatch, getState) => {
    // Check if the user is logged in

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/user`,
        {
          withCredentials: true,
        }
      );
      await dispatch(fetchUser(response.data));

      const isLoggedIn = getState().user.user !== null;
      if (!isLoggedIn) {
        return;
      }
    } catch (error) {}
  };
};

export const logoutUserThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/logout`,
        {},
        { withCredentials: true }
      );
      dispatch(logoutUser());

      // Add any additional logic after successful logout if needed
    } catch (error) {}
  };
};

export const loginUserThunk = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/login`,
        credentials,
        {
          withCredentials: true,
        }
      );
      if (!(response.data === "No User Exists")) {
        const user_info = response.data; // Assuming the login API response contains the user data

        dispatch(loginSuccess(user_info));
      } else {
        alert(response.data);
      }
    } catch (error) {
      // alert(error);
    }
  };
};

export const googleLoginThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/user`,
        {
          withCredentials: true,
        }
      );
      const user = await response.data;

      dispatch(googleLoginSuccess(user));
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {}
  };
};

export const getAccessTokenThunk = (public_token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/plaid/exchange_public_token`,
        { public_token: public_token },
        {
          withCredentials: true,
        }
      );

      const { access_token, item_id } = response.data;
      dispatch(getAccessToken(access_token, item_id));
    } catch (error) {}
  };
};
