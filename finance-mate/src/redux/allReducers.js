import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import getAccountsReducer from "./user/getAccounts.reducer";
import getTransReducer from "./user/getTransReducer";
import addBudgetReducer from "./user/addBudget";
import getBudgetReducer from "./user/getBudgetReducer";
import budgetExpenseReducer from "./user/addExpenseReducer";


const allReducers = combineReducers({
  user: userReducer,
  user_accounts: getAccountsReducer,
  trans:getTransReducer,
  add_budget: addBudgetReducer,
  get_budget: getBudgetReducer,
  add_budget_expense: budgetExpenseReducer
});

export default allReducers;
