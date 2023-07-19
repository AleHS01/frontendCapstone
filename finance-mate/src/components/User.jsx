import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunk } from "../redux/user/user.action";
import { getBudgetsThunk } from "../redux/budget/budget.action";
import { getExpensesThunk } from "../redux/expenses/expense.action";

import SideBar from "./side-bar";
import { dispatch } from "d3";

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log("Use Effect in User.jsx");
    dispatch(getBudgetsThunk());
    dispatch(getExpensesThunk());
    dispatch(fetchUserThunk());
  }, []);

  // console.log(user);

  return (
    <div className="dashboard">
      <SideBar></SideBar>
      <div className="content p-5">
        <h1>Account</h1>
        {user ? (
          <h2>Welcome {user.username}!!</h2>
        ) : (
          <h2>Loading User data...</h2>
        )}
      </div>
    </div>
  );
};

export default User;
