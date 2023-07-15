import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Logout from "./components/LogOut";
import User from "./components/User";
import LinkPlaid from "./components/LinkPlaid";
import Dashboard from "./components/Dashboard";
import Accounts from "./components/GetAccounts";

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
          <Route path = "/accounts" element = {<Accounts></Accounts>}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
