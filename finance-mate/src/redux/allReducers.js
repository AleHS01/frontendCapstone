import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import getAccountsReducer from "./user/getAccounts.reducer";
import getTransReducer from "./user/getTransReducer";

const allReducers = combineReducers({
  user: userReducer,
  user_accounts: getAccountsReducer,
  trans:getTransReducer
});

export default allReducers;
