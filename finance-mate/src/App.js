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
import PayoutSuccess from "./components/committeeSan/Stripe/PayoutSucess";
import ExpensesView from "./components/ExpensesView";
import Transactions from "./components/Transactions";

import BudgetView from "./components/BudgetView";
import AddExpenseForm from "./components/BudgetExpenseForm";

import BudgetForm from "./components/BudgetForm";
import LoginGoogleSuccess from "./components/LoginGoogleSuccess";

import IndividualBudget from "./components/IndividualBudget";

import BudgetPage from "./components/BudgetPage";
import Wallet from "./components/Wallet";
import LandingPage from "./components/committeeSan/LandingPage";
import GroupForm from "./components/committeeSan/CreateGroup";
import AddMembers from "./components/committeeSan/addMembers";

import StripeCeckout from "./components/committeeSan/Stripe/StripeCheckout";

import Activate from "./components/committeeSan/ActivateCommittee";
import Success from "./components/committeeSan/PaymentSuccess";
import FailurePage from "./components/committeeSan/PaymentFailure";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunk } from "./redux/user/user.action";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => !!state.user.id);

  useEffect(() => {
    dispatch(fetchUserThunk());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login/success" element={<LoginGoogleSuccess />} />
          <Route path="/logout" element={<Logout />} />
          <Route element={<ProtectedRoute isLogin={isLogin} />}>
            <Route path="/user" element={<User />} />
            <Route path="/link_plaid" element={<LinkPlaid />} />
            <Route path="/accounts" element={<Accounts></Accounts>}></Route>
            <Route
              path="/bank_accounts"
              element={<Accounts></Accounts>}
            ></Route>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/expense-form" element={<ExpensesForm />} />
            <Route path="/budgetform" element={<BudgetForm></BudgetForm>} />
            <Route path="/budget-view" element={<BudgetView />} />
            <Route
              path="/budget-expense/:budget_id"
              element={<AddExpenseForm></AddExpenseForm>}
            />
            <Route path="/expenses" element={<ExpensesView />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/budgetpage" element={<BudgetPage />} />
            {/* prettier-ignore */}
            <Route path="/individual-budget/:budget_id" element={<IndividualBudget />}/>
            <Route path="/committeesan" element={<LandingPage />} />
            <Route path="/creategroup" element={<GroupForm></GroupForm>} />
            <Route path="/addMembers" element={<AddMembers></AddMembers>} />
            <Route
              path="/stripe-checkout"
              element={<StripeCeckout></StripeCeckout>}
            />
            <Route path="/activate" element={<Activate></Activate>} />
            <Route path="failure" element={<FailurePage></FailurePage>} />
            <Route
              path="/payout-success/:firstName"
              element={<PayoutSuccess />}
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
