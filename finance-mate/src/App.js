import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Logout from "./components/LogOut";
import User from "./components/User";
import LinkPlaid from "./components/LinkPlaid";
import Dashboard from "./components/Dashboard";
import ExpensesForm from "./components/ExpensesForm";
import Accounts from "./components/GetAccounts";

import ExpensesView from "./components/ExpensesView";
import Transactions from "./components/Transactions";

import BudgetView from "./components/BudgetView";
import AddExpenseForm from "./components/BudgetExpenseForm";

import BudgetForm from "./components/BudgetForm";
import LoginGoogleSuccess from "./components/LoginGoogleSuccess";

import IndividualBudget from "./components/IndividualBudget";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/user" element={<User />} />
          <Route path="/link_plaid" element={<LinkPlaid />} />
          <Route path="/accounts" element={<Accounts></Accounts>}></Route>
          <Route path="/accounts" element={<Accounts></Accounts>}></Route>
          <Route path="/bank_accounts" element={<Accounts></Accounts>}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expense-form" element={<ExpensesForm />} />
          <Route path = "/budgetform" element = {<BudgetForm></BudgetForm>}/>
          <Route path = "/budget-view" element = {<BudgetView></BudgetView>} />
          <Route path = "/budget-expense" element = {<AddExpenseForm></AddExpenseForm>} />

          <Route path="/expenses" element={<ExpensesView />} />
          <Route path="/trans" element={<Transactions />} />

          <Route path="/login/success" element={<LoginGoogleSuccess />} />
          <Route path="/individual-budget/:budget_id" element={<IndividualBudget />} />

        </Routes>
      </div>
    </Router>
  );
  

}

export default App;
