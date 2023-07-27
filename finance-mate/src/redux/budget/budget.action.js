import budgetTypes from "./budget.type";
import axios from "axios";

export const getExpenseOfBudget = (expenseBudgetTotal) => ({
  type: budgetTypes.GET_BUDGET_EXPENSE_TOTAL_AMOUNT,
  payload: expenseBudgetTotal,
});

export const addBudget = (budgetinfo) => ({
  type: budgetTypes.ADD_BUDGET,
  payload: budgetinfo,
});

export const getBudget = (budgets) => ({
  type: budgetTypes.GET_BUDGET,
  payload: budgets,
});

//   export const getBudgetName = (budgetName) => ({
//     type: budgetTypes.GET_BUDGET_NAMES,
//     payload: budgetName,
//   });

export const getBudgetAmount = (budgetAmount) => ({
  type: budgetTypes.GET_BUDGET_TOTAL_AMOUNT,
  payload: budgetAmount,
});

export const deleteABudget = (budget) => ({
  type: budgetTypes.DELETE_A_BUDGET,
  payload: budget,
});

//---------------------Thunks------------------

export const getExpenseOfBudgetThunk = (budgetId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/expense/totalExpenses/${budgetId}`,
        {
          withCredentials: true,
        }
      );

      dispatch(getExpenseOfBudget(response.data));
    } catch (error) {}
  };
};

//   export const getBudgetNamesThunk = () => {
//     return async (dispatch) => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_BACKEND_URL}/api/budget/budgetNames",
//           { withCredentials: true }
//         );
//         // const filteredBudgets = response.data.filter((budget) => budget.budget_name !== null);
//         dispatch(getBudgetName(response.data));
//       } catch (error) {
//
//       }
//     };
//   };

export const deleteBubgetThunk = (budgetToDelete) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/budget/${budgetToDelete.id}`,
        {
          withCredentials: true,
        }
      );

      dispatch(deleteABudget(budgetToDelete));
    } catch (error) {}
  };
};

export const getBudgetAmountThunk = (budgetId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/budget/budgetAmount`,
        budgetId,
        {
          withCredentials: true,
        }
      );

      dispatch(getBudgetAmount(response.data));
    } catch (error) {}
  };
};

export const getBudgetsThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/budget/budgetDetails`,
        { withCredentials: true }
      );
      //
      dispatch(getBudget(response.data));
    } catch (error) {}
  };
};

export const addBudgetThunk = (budgetInfo) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/budget/addBudget`,
        budgetInfo,
        {
          withCredentials: true,
        }
      );

      dispatch(addBudget(response.data));
    } catch (error) {}
  };
};
