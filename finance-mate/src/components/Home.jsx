import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";

const Home = () => {
  const handleLogOut = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/logout");
      console.log(response.data); // Assuming the backend sends a "Logout successful" message
      // Add any additional logic after successful logout if needed
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "16px",
      }}
    >
      <h1>Welcome to Finance Mate</h1>
      <Link to="/login">
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Link>
      <Link to="/signup">
        <Button variant="contained" color="primary">
          Sign up
        </Button>
      </Link>
      <Link to="/user">
        <Button variant="contained" color="primary">
          Check Logged User
        </Button>
      </Link>
      <Link to="/logout" onClick={handleLogOut}>
        <Button variant="contained" color="secondary">
          Log Out
        </Button>
      </Link>
    </div>
  );
};

export default Home;
