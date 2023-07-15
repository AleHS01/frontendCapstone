import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import getAccountsReducer from "./user/getAccounts.reducer";

const allReducers = combineReducers({
  user: userReducer,
  user_accounts: getAccountsReducer
});

export default allReducers;
