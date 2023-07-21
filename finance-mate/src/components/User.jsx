import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunk } from "../redux/user/user.action";
import { getBudgetsThunk } from "../redux/budget/budget.action";
import { getExpensesThunk } from "../redux/expenses/expense.action";

import SideBar from "./side-bar";
import { dispatch } from "d3";
import { motion, useInView, useAnimation } from "framer-motion"

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log("Use Effect in User.jsx");
    dispatch(getBudgetsThunk());
    dispatch(getExpensesThunk());
    dispatch(fetchUserThunk());
  }, []);

  //for animation
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  //contols
  const mainControls = useAnimation();
  //to control when to show the animation
  useEffect(() => {
    if(isInView){
      mainControls.start("visible")
    }
  },[isInView]);

  // console.log(user);
  

  return (
    <div className="dashboard">
      <SideBar></SideBar>
      <div 
      ref = {ref}
      className="">
        <motion.div
      variants={{
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{duration: 0.5, delay: 0.25}}
    >
      This is a Framer Motion animated div!
    </motion.div>
      </div>
      
      <div className="content p-5">
        <h1>Account</h1>
        {user ? (
          <h2>Welcome {user.username}!!</h2>
        ) : (
          <h2>Loading User data...</h2>
          )}


        <div>

        </div>
      </div>
    </div>
  );
};

export default User;
