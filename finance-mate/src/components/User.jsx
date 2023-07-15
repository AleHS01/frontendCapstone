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
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunk } from "../redux/user/user.action";
import { logoutUserThunk } from "../redux/user/user.action";
import { Link } from "react-router-dom";
import LinkPlaid from "./LinkPlaid";
import SideBar from "./side-bar";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);


  const getUser = async () => {
    try {
      dispatch(fetchUserThunk());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  return (
    <div className="dashboard">
      <SideBar></SideBar>
      <div className="content">
        <h1>Dashboard</h1>
        <h2>Welcome {user.username}!!!</h2>
        <p>Balance: $5000</p>

      </div>
    </div>
  );
};


export default User;



