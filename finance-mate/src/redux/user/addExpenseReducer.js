// budget.reducer.js

// Define the initial state
const initialState = {
    expenses: [],
  };
  
  // Define the budget reducer
  const budgetExpenseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EXPENSE':
        return {
          ...state,
          expenses: [...state.expenses, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default budgetExpenseReducer;
  