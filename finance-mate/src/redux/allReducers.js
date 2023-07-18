import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import getAccountsReducer from "./user/getAccounts.reducer";
import getTransReducer from "./user/getTransReducer";
import expensesReducer from "./user/getExpenses.reducer";
import budgetReducer from "./user/budgetReducer.js";


const allReducers = combineReducers({
  user: userReducer,
  user_accounts: getAccountsReducer,
  trans: getTransReducer,
  budget: budgetReducer,
  user_expenses: expensesReducer,
});

export default allReducers;
