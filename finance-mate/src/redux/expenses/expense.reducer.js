import expenseTypes from "./expense.type";
const initialState = [];

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case expenseTypes.GET_EXPENSES:
      return action.payload;

    case expenseTypes.UPDATE_A_EXPENSES:
      const updatedExpense = action.payload;
      return state.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      );

    case expenseTypes.DELETE_EXPENSE:
      const deletedExpense = action.payload;
      return state.filter((expense) => expense.id !== deletedExpense.id);

    case expenseTypes.CREATE_OR_UPDATE_EXPENSES:
      return action.payload;

    case expenseTypes.ADD_EXPENSE:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default expensesReducer;
