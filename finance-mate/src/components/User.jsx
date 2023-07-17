import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/user/user.action";

import SideBar from "./side-bar";

const User = () => {
  const dispatch = useDispatch();
  // const user=JSON.parse(localStorage.getItem("user"))
  const user = useSelector((state) => state.user.user);
  console.log(user);
  // useEffect=(()=>dispatch(fetchUser({user:user})))
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
