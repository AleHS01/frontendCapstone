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
        `http://localhost:8080/api/expense/totalExpenses/${budgetId}`,
        {
          withCredentials: true,
        }
      );
      console.log("Total expense done inside this budget: ", response.data);
      dispatch(getExpenseOfBudget(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

//   export const getBudgetNamesThunk = () => {
//     return async (dispatch) => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8080/api/budget/budgetNames",
//           { withCredentials: true }
//         );
//         // const filteredBudgets = response.data.filter((budget) => budget.budget_name !== null);
//         dispatch(getBudgetName(response.data));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//   };

export const deletedubgetThunk = (budgetToDelete) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/budget/${budgetToDelete.id}`,
        {
          withCredentials: true,
        }
      );

      dispatch(deleteABudget(budgetToDelete));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getBudgetAmountThunk = (budgetId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/budget/budgetAmount",
        budgetId,
        {
          withCredentials: true,
        }
      );
      console.log("Budget total retrieved by thunk: ", response.data);
      dispatch(getBudgetAmount(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getBudgetsThunk = () => {
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
      console.log("RESPONSE FROM addBudgetThunk" + response.data);
      dispatch(addBudget(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
