import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../redux/user/user.action";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      // Simulating a logout request with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await dispatch(logoutUserThunk());

      navigate("/");
    } catch (error) {}
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Logging You Out
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Logout successful
      </Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Go Back Home
      </Button>
    </Box>
  );
};

export default Logout;
