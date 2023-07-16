import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../redux/user/user.action";

function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logoutUserThunk());
      console.log("Logout successful");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLinkPlaid = () => {
    navigate("/link_plaid");
  };

  const handleAccount = () => {
    navigate("/user");
  };
  const handleBankAccount = () => {
    navigate("/bank_accounts");
  };
  const handleFinaceForm = () => {
    navigate("/expense-form");
  };
  const handleExpenseView = () => {
    navigate("/expenses");
  };

  return (
    <div className="sidebar">
      <button className="sidebar-button" onClick={handleLogout}>
        Sign Out
      </button>
      <button className="sidebar-button" onClick={handleAccount}>
        Account
      </button>
      <button className="sidebar-button" onClick={handleLinkPlaid}>
        Add Payment
      </button>
      <button className="sidebar-button" onClick={handleBankAccount}>
        Accounts
      </button>
      <button className="sidebar-button" onClick={handleFinaceForm}>
        Finance Form
      </button>
      <button className="sidebar-button" onClick={handleExpenseView}>
        Expenses
      </button>
    </div>
  );
}

export default SideBar;
