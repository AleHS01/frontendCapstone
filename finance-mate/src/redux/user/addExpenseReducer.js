import userActionTypes from "./user.type";

const initialState = {
  get_budget_categories: [],
};

const getBudgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case(userActionTypes.GET_BUDGET_NAMES):
      return {
        ...state,
        get_budget_categories: action.payload,
      };
    default:
      return state;
  }
};

export default getBudgetReducer;
