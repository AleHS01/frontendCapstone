import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../redux/user/user.action";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      await dispatch(loginUserThunk({ username, password }));
      //need to dispatch Login, to login the user as soon as submit the data

      setPassword("");
      setUsername("");
      navigate("/expense-form");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

      <Link className="absolute top-0 right-0 bg-green-600 flex rounded-md px-4 py-2 m-4 shadow-md font-semibold font-sans rounded-lg border-4" to="/">Home</Link>

      <h1 className=" flex justify-center text-white my-5 bg-black p-4 rounded-md text-2xl font-extrabold border-8 shadow-lg">Join Finance-Mate Today <br/> Unlock the Power of Financial Freedom</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-4 py-2 px-4 border border-black rounded-md shadow-lg focus:outline-none focus:border-green-500"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 py-2 px-4 border border-black rounded-md shadow-lg focus:outline-none focus:border-green-500"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 py-2 px-4 border border-black rounded-md shadow-lg focus:outline-none focus:border-green-500"
      />

      <button
        // variant="contained"
        // color="primary"
        onClick={signUp}
        //style={{ marginBottom: "1rem" }}
        className="bg-green-600 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold font-sans"

      >
        Submit
      </button>
      <br/>

      <div className="bg-green-600 flex rounded-lg px-4 py-2 mr-4 items-center mb-4 shadow-md border-8 ">
        <p className="text-black mr-2 font-serif text-xl">Already have an account?</p>
      <Link className="bg-green-500 flex rounded-md px-4 py-2 mr-4 items-center mb-4 shadow-md " to="/login">
        <p className="bg-black p-1.5 rounded-md text-white font-bold">Login</p>
      </Link>
      </div>

    </div>
  );
};

export default SignUp;
