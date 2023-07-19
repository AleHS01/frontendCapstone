import budgetTypes from "./budget.type";
const initialState = [];

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case budgetTypes.ADD_BUDGET: {
      return [...state, action.payload];
    }
    case budgetTypes.GET_BUDGET: {
      return action.payload;
    }
    case budgetTypes.DELETE_A_BUDGET: {
      const deleteBudget = action.payload;
      return state.filter((budget) => budget.id !== deleteBudget.id);
    }
    case budgetTypes.GET_BUDGET_TOTAL_AMOUNT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default budgetReducer;
