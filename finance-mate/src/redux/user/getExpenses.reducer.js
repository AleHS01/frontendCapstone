import userActionTypes from "./user.type";
const initialState = [];
const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.GET_EXPENSES:
      return action.payload;
    case userActionTypes.UPDATE_A_EXPENSES:
      const updatedExpense = action.payload;
      return state.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      );
    case userActionTypes.DELETE_EXPENSE:
      const deletedExpense = action.payload;
      return state.filter((expense) => expense.id !== deletedExpense.id);
    case userActionTypes.CREATE_OR_UPDATE_EXPENSES:
      return action.payload;
    default:
      return state;
  }
};

export default expensesReducer;
