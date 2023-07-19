import budgetTypes from "./budget.type";
const initialState = 0.0;

const getBudgetExpenseAmount = (state = initialState, action) => {
  switch (action.type) {
    case budgetTypes.GET_BUDGET_EXPENSE_TOTAL_AMOUNT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
export default getBudgetExpenseAmount;
