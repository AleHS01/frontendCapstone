import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../redux/user/user.action";
import {
  AiFillHome,
  AiOutlineFileDone,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import GoogleButton from "react-google-button";
import { googleLoginThunk } from "../redux/user/user.action";
import { motion, useInView, useAnimation } from "framer-motion";
import signup from "../images/picforsignup.svg"; // Import the image



//BiLogIn

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerified, setPasswordVerified] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordVerified, setShowPasswordVerified] = useState(false);
  const [formError, setFormError] = useState("");

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
          first_name: firstName,
          last_name: lastName,
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
      setFirstName("");
      setLastName("");
      setPasswordVerified("");
      setFormError("");

      navigate("/user");
    } catch (error) {
      console.log(error);
    }
  };
  const googleLogin = async () => {
    const newWindow = window.open(
      "http://localhost:8080/api/login/google",
      "_blank",
      "width=400, height=700"
    );
    let timer = setInterval(() => {
      if (newWindow.closed) {
        console.log("You are logged with google");
        dispatch(googleLoginThunk());
        if (timer) clearInterval(timer);
        navigate("/user", {state: {intro: true}});
      }
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !username ||
      !password ||
      !passwordVerified ||
      !firstName ||
      !lastName ||
      !email
    ) {
      setFormError("Please fill in all fields.");
    } else if (password !== passwordVerified) {
      setFormError("Passwords do not match.");
    } else {
      signUp();
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleTogglePasswordVerified = () => {
    setShowPasswordVerified(
      (prevShowPasswordVerified) => !prevShowPasswordVerified
    );
  };

  const location = useLocation();
  console.log(JSON.stringify(location))
  console.log("Location 1: "+location)

  return (
    <div style={{ backgroundColor: "#2E8B57", minHeight: "100vh" }}>
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Link
        className="hover:scale-110 hover:shadow-lg duration-200 absolute top-0 right-0 bg-green-400 flex rounded-md px-4 py-2 m-4 shadow-md font-semibold font-sans rounded-lg border-4"
        to="/"
      >
        <AiFillHome className="mt-0.5 text-lg" />
        Home
      </Link>
      <motion.img 
          variants={{
            hidden: {opacity: 0, x: -80},
            visible: {opacity: 1, x: 0},
          }}
          initial="hidden"
          animate="visible"
          transition={{duration: 0.8, delay: 0.25}}
            className="ml-4 my-2"
            src={signup}
            alt="Plaid"
            style={{ width: "200px", height: "auto" }}
          />


      <div className="border shadow-xl rounded-md bg-green-300 p-4 py-6 px-4 my-2 mb-2 border-black flex flex-col items-center"
      style={{width: "400px", height: "650px"}}
      >
        <h1 className="flex justify-center font-extrabold text-4xl font-serif mb-2"> Sign Up</h1>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="mb-4 py-2 px-4 border border-black rounded-md shadow-lg focus:outline-none focus:border-green-500"
        style={{width: "300px"}}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="mb-4 py-2 px-4 border border-black rounded-md shadow-lg focus:outline-none focus:border-green-500"
        style={{width: "300px"}}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-4 py-2 px-4 border border-black rounded-md shadow-lg focus:outline-none focus:border-green-500"
        style={{width: "300px"}}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 py-2 px-4 border border-black rounded-md shadow-lg focus:outline-none focus:border-green-500"
        style={{width: "300px"}}
      />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 py-2 px-4 border border-black rounded-md shadow-lg focus:outline-none focus:border-green-500"
        style={{width: "300px"}}
      />

      <input
        type={showPasswordVerified ? "text" : "password"}
        placeholder="Re-enter Password"
        value={passwordVerified}
        onChange={(e) => setPasswordVerified(e.target.value)}
        className="mb-4 py-2 px-4 border border-black rounded-md shadow-lg focus:outline-none focus:border-green-500"
        style={{width: "300px"}}
      />

      {formError && <p style={{ color: "red" }}>{formError}</p>}
      <button
      style={{width: "150px"}}
        onClick={handleSubmit}
        className="flex justify-center hover:scale-110 hover:shadow-lg hover:bg-white duration-200 bg-green-500 flex rounded-md px-2 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold font-sans"
      >
        <AiOutlineFileDone className="text-3xl" />
        Sign Up
      </button>
      <GoogleButton className="m-4 shadow-md hover:scale-105" onClick={googleLogin} />

      <motion.div
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, delay: 1 }}
      className="bg-green-200 flex rounded-lg px-4 py-2 items-center shadow-md border-2"
    >
      <p className="text-black mr-2 font-serif text-lg">Already have an account?</p>
      <Link
        className="hover:scale-110 hover:shadow-lg duration-200 bg-green-400 flex rounded-md px-2 py-2 mr-4 items-center mt-mb-4 shadow-md text-semibold"
        to="/login"
      >
        <BiLogIn className="text-lg mr-2 text" />
        LOGIN
      </Link>
    </motion.div>
      </div>
      <br />
    </div>
    </div>
  );
};

export default SignUp;