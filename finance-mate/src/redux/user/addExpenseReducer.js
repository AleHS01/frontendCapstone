import userActionTypes from "./user.type";

const initialState = {
  expenses: {},
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case(userActionTypes.ADD_EXPENSE):
      return {
        ...state,
        expenses: action.payload,
      };
    default:
      return state;
  }
};

export default expenseReducer;
   