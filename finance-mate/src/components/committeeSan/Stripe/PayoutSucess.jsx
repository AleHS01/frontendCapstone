import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PayoutSuccess = ({ firstName }) => {
  const navigate = useNavigate();
  const [secondsRemaining, setSecondsRemaining] = useState(5);

  useEffect(() => {
    const redirectTimer = setInterval(() => {
      setSecondsRemaining((prevSeconds) => prevSeconds - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      navigate("/creategroup");
    }, 5000);

    return () => {
      clearTimeout(redirectTimeout);
      clearInterval(redirectTimer);
    };
  }, [navigate]);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #2d6a4f, #74c69d)",
      }}
    >
      <Box
        sx={{
          padding: "20px",
          borderRadius: "15px",
          background: "#fff",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" color="success">
          Payout to {firstName} Successful
        </Typography>
        <Typography variant="body1">
          In a few minutes, you should see the transaction.
        </Typography>
        <Typography variant="body1">
          {secondsRemaining}s to redirect back...
        </Typography>
      </Box>
    </Box>
  );
};

export default PayoutSuccess;
