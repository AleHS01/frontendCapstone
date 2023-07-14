import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../redux/user/user.action";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <div>
      <Typography variant="h1">Logging out</Typography>
      <Typography variant="body1">Logout successful</Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Go Back Home
      </Button>
    </div>
  );
};

export default Logout;
