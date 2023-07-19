import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../redux/user/user.action";
import { AiFillHome, AiOutlineFileDone } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";


//BiLogIn

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

      <Link className="hover:scale-110 hover:shadow-lg duration-200 absolute top-0 right-0 bg-green-600 flex rounded-md px-4 py-2 m-4 shadow-md font-semibold font-sans rounded-lg border-4" to="/">
      <AiFillHome className="mt-0.5 text-lg"/>
        Home</Link>

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
        onClick={signUp}
        className="hover:scale-110 hover:shadow-lg duration-200 bg-green-600 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold font-sans">
          <AiOutlineFileDone className="text-3xl"/>
        Submit
      </button>
      <br/>

      <div className="bg-green-600 flex rounded-lg px-4 py-2 mr-4 items-center mb-4 shadow-md border-8 ">
        <p className="text-black mr-2 font-serif text-xl">Already have an account?</p>
      <Link className=" hover:scale-110 hover:shadow-lg duration-200 bg-green-400 flex rounded-md px-4 py-2 mr-4 items-center mt-mb-4 shadow-md text-semibol" to="/login">
      <BiLogIn className="text-lg mr-1"/>LOGIN</Link>
      </div>

      <div className="m-4 bg-green-600 flex rounded-lg px-6 py-3 mr-4 items-center mb-4 shadow-md border-8 ">
          <p className="text-base font-serif p-4 border border-green-500 border-opacity-50 rounded-lg bg-gradient-to-r from-green-100 to-green-200 text-lg">
            <h1 className="flex justify-center font-semibold text-xl font-serif">Finance-Mate</h1>
            Welcome to Finance-Mate, your trusted companion for simplified financial management. 
            Take control of your money and achieve your goals effortlessly. 
            Seamlessly track expenses, analyze spending patterns, and budget for a secure future. 
            Manage accounts, make seamless transactions, and stay informed in one place. 
            Experience convenience, security, and peace of mind. 
            Join us today and embark on a rewarding financial journey.
          </p>
          
        </div>

    </div>
  );
};

export default SignUp;
