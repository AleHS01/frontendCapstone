import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunk } from "../redux/user/user.action";
import { getBudgetsThunk } from "../redux/budget/budget.action";
import { getExpensesThunk } from "../redux/expenses/expense.action";
import { getTransactionsThunk } from "../redux/transactions/transation.action";
import PageHeader from "./PageHeader";

import SideBar from "./side-bar";
import { dispatch } from "d3";
import { motion, useInView, useAnimation } from "framer-motion";
import zIndex from "@mui/material/styles/zIndex";
import { useLocation } from "react-router-dom";
import Accounts from "./GetAccounts";
import Transactions from "./Transactions";

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const location = useLocation();
  //
  //
  useEffect(() => {
    window.history.replaceState({}, document.title);

    JSON.stringify(location);

    dispatch(getBudgetsThunk());
    dispatch(getExpensesThunk());
    dispatch(getTransactionsThunk());
    dispatch(fetchUserThunk());
  }, []);

  //

  return (
    <div className="dashboard">
      <SideBar></SideBar>
      <div className="content p-5">
        <PageHeader page_name="My Accounts" />

        <div className="">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="Visible"
            // animate={location.state ? "visible" : ''}
            transition={{ duration: 0.5, delay: 0.25 }}
          ></motion.div>
        </div>

        {user ? (
       <div class="bg-gray-100 min-h-screen py-8 px-4">
        <h1 class="text-3xl font-bold text-center text-light-green mb-4">Welcome {user.first_name}</h1>
        <h3 class="text-xl font-semibold text-center text-gray-800 mb-4">Dashboard</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div class="bg-white rounded-lg shadow-md p-4">

           <Accounts></Accounts>
         </div>
         <div class="bg-white rounded-lg shadow-md p-4">
         <motion.div
          className="bg-white rounded-lg shadow-md p-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Accounts></Accounts>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg shadow-md p-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Transactions></Transactions>
        </motion.div>

           <Transactions></Transactions>
         </div>
       </div>
     </div>
     
        ) : (
          <h2>Loading User data...</h2>
        )}
      </div>
    </div>
  );
};

export default User;
