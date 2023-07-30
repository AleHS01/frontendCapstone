import expenseTypes from "./expense.type";
import axios from "axios";

axios.defaults.withCredentials = true;

export const getExpenses = (expenses) => ({
  type: expenseTypes.GET_EXPENSES,
  payload: expenses,
});
export const createExpenses = (expenses) => ({
  type: expenseTypes.CREATE_OR_UPDATE_EXPENSES,
  payload: expenses,
});
export const updateAExpense = (expense) => ({
  type: expenseTypes.UPDATE_A_EXPENSES,
  payload: expense,
});

export const deleteAExpense = (expense) => ({
  type: expenseTypes.DELETE_EXPENSE,
  payload: expense,
});

export const addExpense = (expense) => ({
  type: expenseTypes.ADD_EXPENSE,
  payload: expense,
});

//----------------------Thunks----------------------
export const getExpensesThunk = (UserId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/expense/getExpenses`
      );
      const expenses = await response.data;
      console.log(
        "GET EXPENSES RESPONSE DATA INSIDE THUNK\n",
        await response.data
      );
      dispatch(getExpenses(expenses));
      return response.data;
    } catch (error) {}
  };
};

export const addExpenseThunk = (expenseData) => {
  return async (dispatch) => {
    try {
      // Make a POST request to the API endpoint to add the expense
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/expense/addExpense`,
        expenseData,
        { withCredentials: true }
      );
      const expense = response.data;

      dispatch(addExpense(expense));
    } catch (error) {
      console.error(error);
    }
  };
};

export const createExpensesThunk = (expenses) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/expense`,
        { expenses },
        {
          withCredentials: true,
        }
      );
      const expensesList = await response.data;

      dispatch(createExpenses(expensesList));

      return response.data;
    } catch (error) {}
  };
};

export const updateExpenseThunk = (expenseToUpdpate) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/expense/${expenseToUpdpate.id}`,
        expenseToUpdpate,
        {
          withCredentials: true,
        }
      );
      const updatedExpense = await response.data;

      dispatch(updateAExpense(updatedExpense));
      return response.data;
    } catch (error) {}
  };
};
export const deleteExpenseThunk = (expenseToDelete) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/expense/${expenseToDelete.id}`,
        {
          withCredentials: true,
        }
      );

      dispatch(deleteAExpense(expenseToDelete));
    } catch (error) {}
  };
};
