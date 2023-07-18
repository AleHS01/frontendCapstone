import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {fetchUser} from "../redux/user/user.action"
import {getBudgets,getExpensesThunk} from "../redux/user/user.action"

import SideBar from "./side-bar";
import { dispatch } from "d3";

const User = () => {
  const dispatch=useDispatch();

    dispatch(getBudgets());
    dispatch(getExpensesThunk())
    console.log("Use Effect")

  

  const user = useSelector((state) => state.user);
  // console.log(user);

  return (
    <div className="dashboard">
      <SideBar></SideBar>
      <div className="content">
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
