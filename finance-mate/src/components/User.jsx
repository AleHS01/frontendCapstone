// import React from "react";
// import { Link } from "react-router-dom";
// import { Typography, Button } from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchUserThunk } from "../redux/user/user.action";

// const User = () => {
//   const user = useSelector((state) => state.user.user);
//   const dispatch = useDispatch();

//   const getUser = () => {
//     dispatch(fetchUserThunk());
//   };

//   return (
//     <div>
//       <Typography variant="h1">User Goes Here</Typography>
//       <Link to="/">Go Home</Link>
//       <Button
//         variant="contained"
//         onClick={getUser}
//         style={{ marginTop: "1rem" }}
//       >
//         Get User Data
//       </Button>
//       {user ? (
//         <div>
//           <Typography variant="h1">Welcome {user.username}!!!</Typography>
//           <Typography variant="h2">Email: {user.email}</Typography>
//         </div>
//       ) : (
//         <Typography variant="body1">Nothing to see here</Typography>
//       )}
//     </div>
//   );
// };

// export default User;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunk } from "../redux/user/user.action";
import { logoutUserThunk } from "../redux/user/user.action";
// import { Link } from "react-router-dom";
// import LinkPlaid from "./LinkPlaid";
// import Accounts from "./GetAccounts";
import SideBar from "./side-bar";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    console.log(state)
    return state.user.user});

  const handleLogout = async () => {
    try {
      // Simulating a logout request with a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await dispatch(logoutUserThunk());
      console.log("Logout successful");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // const getUser = async () => {
  //   try {
  //     await dispatch(fetchUserThunk());
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   console.log("This is the return user:", user);
  // };

  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       await dispatch(fetchUserThunk());
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     console.log("This is the return user:", user);
  //   };

  //   getUser();
  // }, []);

  return (
    <div className="dashboard">
      <SideBar></SideBar>
      <div className="content">
        <h1>Account</h1>
        {user && user.username ? (
          <h2>Welcome {user.username}!!</h2>
        ) : (
          <h2>Loading User data...</h2>
        )}
      </div>
    </div>
  );
};

export default User;
