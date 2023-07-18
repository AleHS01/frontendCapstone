import axios from "axios";
import userActionTypes from "./user.type";

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

export const getAccessToken = (access_token, item_id) => ({
  type: userActionTypes.GET_ACCESS_TOKEN,
  payload: {
    access_token: access_token,
    item_id: item_id,
  },
});

export const getAccounts = (accounts) => ({
  type: userActionTypes.GET_ACCOUNT,
  payload: accounts,
});

export const getTransactions = (transactions) => ({
  type: userActionTypes.GET_TRANS,
  payload: transactions,
});

//----------------Expenses Actions----------------

export const getExpenses = (expenses) => ({
  type: userActionTypes.GET_EXPENSES,
  payload: expenses,
});
export const createExpenses = (expenses) => ({
  type: userActionTypes.CREATE_OR_UPDATE_EXPENSES,
  payload: expenses,
});
export const updateAExpense = (expense) => ({
  type: userActionTypes.UPDATE_A_EXPENSES,
  payload: expense,
});

export const deleteAExpense = (expense) => ({
  type: userActionTypes.DELETE_EXPENSE,
  payload: expense,
});

//----------------End of Expenses Actions----------------

// ---------------------Budget Actions-------------------------
export const addBudget = (budgetinfo) => ({
  type: userActionTypes.ADD_BUDGET,
  payload: budgetinfo,
});

export const getBudget = (budgets) => ({
  type: userActionTypes.GET_BUDGET,
  payload: budgets,
});

export const addExpense = (expense) => ({
  type: userActionTypes.ADD_EXPENSE,
  payload: expense,
});

export const getBudgetName = (budgetName) => ({
  type: userActionTypes.GET_BUDGET_NAMES,
  payload: budgetName,
});

export const getBudgetAmount = (budgetAmount) => ( {
  type: userActionTypes.GET_BUDGET_TOTAL_AMOUNT,
  payload: budgetAmount
})


//-------------------------End of Budget Actions----------------------------



//-------------------------------------Thunks----------------------------------------

export const fetchUserThunk = () => {
  console.log("got to the fetch_user_thunk");
  return async (dispatch, getState) => {
    // Check if the user is logged in

    try {
      const response = await axios.get(
        "http://localhost:8080/api/user",
        {},
        {
          withCredentials: true,
        }
      );
      await dispatch(fetchUser(response.data));
      console.log("Response: ", response);
      const isLoggedIn = getState().user.user !== null;
      if (!isLoggedIn) {
        console.log("not logged :(");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const logoutUserThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/logout",
        {},
        { withCredentials: true }
      );
      dispatch(logoutUser());
      console.log(response.data); // Assuming the backend sends a "Logout successful" message
      // Add any additional logic after successful logout if needed
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginUserThunk = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        credentials,
        {
          withCredentials: true,
        }
      );
      const user_info = response.data; // Assuming the login API response contains the user data
      console.log("User\n", response.data);
      dispatch(loginSuccess(user_info));
      localStorage.setItem("user", JSON.stringify(user_info));
    } catch (error) {
      console.log(error);
    }
  };
};

export const googleLoginThunk = () => {
  return async (dispatch) => {
    console.log("IN GOOGLE THUNK");
    try {
      const response = await axios.get("http://localhost:8080/api/user", {
        withCredentials: true,
      });
      const user = await response.data;
      console.log("User\n", await response.data);
      dispatch(googleLoginSuccess(user));
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAccessTokenThunk = (public_token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/plaid/exchange_public_token",
        { public_token: public_token },
        {
          withCredentials: true,
        }
      );
      console.log("Response data", response.data);
      const { access_token, item_id } = response.data;
      dispatch(getAccessToken(access_token, item_id));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAccountsThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/plaid/accounts",
        {},
        {
          withCredentials: true,
        }
      );
      const accounts = response.data.accounts;
      console.log("User bank account types:", accounts);
      dispatch(getAccounts(accounts));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTransactionsThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/plaid/transactions",
        {},
        {
          withCredentials: true,
        }
      );
      const transactions = await response;
      console.log("User bank account types:", transactions);
      dispatch(getTransactions(transactions));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addBudgetThunk = (budgetInfo) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/budget/addBudget",
        budgetInfo,
        {
          withCredentials: true,
        }
      );
      console.log("RESPONSE FROM addBudgetThunk"+response.data);
      dispatch(addBudget(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

//---------------ExpensesThunk-----------

export const getExpensesThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/expense/getExpenses",
        { withCredentials: true }
      );
      const expenses = await response.data;
      console.log("User Expenses in Thunk:", expenses);
      dispatch(getExpenses(expenses));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
};

export const getBudgets = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/budget/budgetDetails",
        { withCredentials: true }
      );
      console.log(response);
      dispatch(getBudget(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addExpenseThunk = (expenseData) => {
  return async (dispatch) => {
    try {
      // Make a POST request to the API endpoint to add the expense
      const response = await axios.post("http://localhost:8080/api/expense/addExpense", expenseData, {withCredentials: true});
      const expense = response.data;

      dispatch(addExpense(expenseData));
    } catch (error) {
      console.error(error);
    }
  };
};

export const createExpensesThunk = (expenses) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/expense",
        { expenses },
        {
          withCredentials: true,
        }
      );
      const expensesList = await response.data;
      console.log("Created Expense List:", expensesList);
      dispatch(createExpenses(expensesList));

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateExpenseThunk = (expenseToUpdpate) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/expense/${expenseToUpdpate.id}`,
        expenseToUpdpate,
        {
          withCredentials: true,
        }
      );
      const updatedExpense = await response.data;
      console.log("Updated Expense", updatedExpense);
      dispatch(updateAExpense(updatedExpense));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteExpenseThunk = (expenseToDelete) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/expense/${expenseToDelete.id}`,
        {
          withCredentials: true,
        }
      );
      const updatedExpense = await response.data;
      console.log("Updated Expense", updatedExpense);
      dispatch(deleteAExpense(updatedExpense));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
};

export const getBudgetNamesThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/budget/budgetNames",
        { withCredentials: true }
      );
      // const filteredBudgets = response.data.filter((budget) => budget.budget_name !== null);
      dispatch(getBudgetName(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getBudgetAmountThunk = (budgetId) => {
  return async(dispatch) => {
    try {
      const response = await axios.post("http://localhost:8080/api/budget/budgetAmount", budgetId, {
        withCredentials: true
      })
      console.log("Budget total retrieved by thunk: ", response.data)
      dispatch(getBudgetAmount(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}
