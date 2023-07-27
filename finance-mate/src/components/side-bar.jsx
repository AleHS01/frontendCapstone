import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../redux/user/user.action";

import { RiBankFill } from "react-icons/ri";
import { ImUserTie, ImUsers } from "react-icons/im";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { SlLogout, SlWallet } from "react-icons/sl";
import { AiOutlineForm } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbReportMoney } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";
import { RiExchangeFundsFill } from "react-icons/ri";
import { motion } from "framer-motion";

function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const handleLogout = async () => {
    try {
      dispatch(logoutUserThunk());
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

  const handleTrans = () => {
    navigate("/transactions");
  };

  const handleSetBudget = () => {
    navigate("/budget-view");
  };

  const handleCommitteeSan = () => {
    navigate("/committeesan");
  };

  const location = useLocation();

  return (
    <div className={`sidebar-container ${open ? "expanded" : "collapsed"}`}>
      {/* Header */}
      <div className={`sidebar-header ${open ? "expanded" : "collapsed"}`}>
        <RiBankFill className="sidebar-logo navigation-icon" />
        {open && <h1 className="sidebar-title">Finance-Mate</h1>}
      </div>

      {/* Navigation Items */}
      <div className={`sidebar-navigation ${open ? "expanded" : "collapsed"}`}>
        <motion.div
          className="navigation-item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleAccount}
        >
          <ImUserTie className="navigation-icon" />
          <button className="navigation-button">Account</button>
        </motion.div>
        <motion.div
          className="navigation-item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleBankAccount}
        >
          <ImUsers className="navigation-icon" />
          <button className="navigation-button">Bank Accounts</button>
        </motion.div>
        <motion.div
          className="navigation-item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleLinkPlaid}
        >
          <SlWallet className="navigation-icon" />
          <button className="navigation-button">Add Payment</button>
        </motion.div>
        <motion.div
          className="navigation-item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleFinaceForm}
        >
          <AiOutlineForm className="navigation-icon" />
          <button className="navigation-button">Expenses Form</button>
        </motion.div>
        <motion.div
          className="navigation-item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleExpenseView}
        >
          <GiTakeMyMoney className="navigation-icon" />
          <button className="navigation-button">Expenses</button>
        </motion.div>
        <motion.div
          className="navigation-item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleSetBudget}
        >
          <TbReportMoney className="navigation-icon" />
          <button className="navigation-button">Set Budget</button>
        </motion.div>
        <motion.div
          className="navigation-item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleTrans}
        >
          <GrTransaction className="navigation-icon" />
          <button className="navigation-button">Transactions</button>
        </motion.div>
        <motion.div
          className="navigation-item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCommitteeSan}
        >
          <RiExchangeFundsFill className="navigation-icon" />
          <button className="navigation-button">Committee San</button>
        </motion.div>
      </div>

      {/* Toggle Button */}
      <div className="sidebar-toggle" onClick={() => setOpen(!open)}>
        <BsFillArrowLeftCircleFill
          className={`toggle-icon ${!open && "rotate-180"}`}
        />
      </div>

      {/* Logout Button */}
      {/* <motion.div
        className={`navigation-item ${open ? "expanded" : "collapsed"}`}
        onClick={handleLogout}
      >
        <SlLogout onClick={handleLogout} className="logout-icon" />
        <button className="logout-button">Sign Out</button>
      </motion.div> */}
      <motion.div
        className="navigation-item"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleLogout}
      >
        <SlLogout className="navigation-icon" />
        <button className="navigation-button">Sign Out</button>
      </motion.div>
    </div>
  );
}

export default SideBar;
