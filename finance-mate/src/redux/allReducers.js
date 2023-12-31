import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import getAccountsReducer from "./accounts/account.reducer";
import getTransReducer from "./transactions/transaction.reducer";
import expensesReducer from "./expenses/expense.reducer";
import budgetReducer from "./budget/budget.reducer";
import getBudgetExpenseAmount from "./budget/budget_expense.reducer";
import groupReducer from "./groups/group.reducer";
import stripeReducer from "./stripe/stripe.reducer";

const allReducers = combineReducers({
  user: userReducer, //done
  user_accounts: getAccountsReducer, //done
  trans: getTransReducer, //done
  budget: budgetReducer, //done
  user_expenses: expensesReducer, //done
  user_budget_expenses: getBudgetExpenseAmount, //done
  committee_groups: groupReducer,
  stripe: stripeReducer
});

export default allReducers;
