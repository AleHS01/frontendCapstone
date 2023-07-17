import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import getAccountsReducer from "./user/getAccounts.reducer";
import getTransReducer from "./user/getTransReducer";
import addBudgetReducer from "./user/addBudget";

const allReducers = combineReducers({
  user: userReducer,
  user_accounts: getAccountsReducer,
  trans:getTransReducer,
  add_budget: addBudgetReducer
});

export default allReducers;
