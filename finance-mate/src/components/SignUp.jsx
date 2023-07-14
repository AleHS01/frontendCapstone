import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/signup",
        {
          username: username,
          password: password,
          email: email,
        },
        {
          withCredentials: true,
        }
      );
      console.log("Response: ", response);

      setPassword("");
      setUsername("");
      navigate("/user");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Sign Up</h1>
      <Link to="/login">Login</Link>
      <Link to="/">Home</Link>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={signUp}
        style={{ marginBottom: "1rem" }}
      >
        Submit
      </Button>
    </div>
  );
};

export default SignUp;
