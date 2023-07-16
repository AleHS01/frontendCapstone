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
import SideBar from "./components/side-bar";
import ExpensesView from "./components/ExpensesView";
import Transactions from "./components/Transactions";

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
          <Route path="/expenses" element={<ExpensesView />} />
          <Route path="/trans" element={<Transactions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
