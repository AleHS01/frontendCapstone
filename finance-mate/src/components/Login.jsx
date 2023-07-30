import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../redux/user/user.action";
import { useNavigate, useLocation } from "react-router-dom";
import { AiFillHome, AiOutlineFileDone } from "react-icons/ai";
import { GrUserAdd } from "react-icons/gr";
import GoogleButton from "react-google-button";
import { googleLoginThunk } from "../redux/user/user.action";
import { FcGoogle } from "react-icons/fc";
import { motion, AnimatePresence, isInView, useInView, useAnimation } from "framer-motion";
import space from "../images/space.webp"; // Import the image



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch(); // Get the dispatch function
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [loginStatus, setLoginStatus] = useState(""); // New state variable to track login status

  useEffect(() => {
    if (loginStatus === "failed") {
      alert("Login Failed");
    } else if (loginStatus === "success") {
      navigate("/user", { state: { intro: true } });
    }
  }, [loginStatus]);

  useEffect(() => {
    if (!(Object.keys(user).length === 0)) {
      setLoginStatus("success"); // Set loginStatus to "success" if login is successfull
    }
  }, [user]);

  const handleLogin = () => {
    dispatch(loginUserThunk({ username, password }));
  };
  const googleLogin = async () => {
    const newWindow = window.open(
      `${process.env.REACT_APP_BACKEND_URL}/api/login/google`,
      "_blank",
      "width=400, height=700"
    );
    let timer = setInterval(() => {
      if (newWindow.closed) {
        dispatch(googleLoginThunk());
        if (timer) clearInterval(timer);
        navigate("/user", { state: { intro: true } });
      }
    }, 500);
  };
  const location = useLocation();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Link to Home */}
      <Link className="hover:scale-110 hover:shadow-lg duration-200 absolute top-0 right-0 bg-green-400 flex rounded-md px-4 py-2 m-4 shadow-md font-semibold font-sans rounded-lg border-4" to="/">
        <AiFillHome className="mt-0.5 text-lg"/>
        Home</Link>

        <motion.img 
          variants={{
            hidden: {opacity: 0, x: -80},
            visible: {opacity: 1, x: 0},
          }}
          initial="hidden"
          animate="visible"
          transition={{duration: 0.8, delay: 0.25}}
            className="ml-4 my-2"
            src="https://i.postimg.cc/x1rYdyrp/Welcome-to-scribie-512x391-1.png"
            alt="Plaid"
            style={{ width: "200px", height: "auto" }}
          />
      
      <div className="border shadow-xl rounded-md bg-green-300 p-4 py-6 px-4 my-2 mb-2 border-black flex flex-col items-center"
      style={{width: "400px", height: "450px"}}
      >
        <h1 className="flex justify-center font-extrabold text-4xl font-serif mb-2"> Login</h1>
        <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        //TailWindCSS
        className="mb-4 py-2 px-4 border border-black rounded-md shadow-xl focus:outline-none focus:border-green-500"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        //TailWindCSS
        className="mb-4 py-2 px-4 border border-black rounded-md shadow-xl focus:outline-none focus:border-green-500"
      />

      <button
        //TailWindCSS
        className="hover:scale-110 hover:shadow-lg duration-200 bg-green-600 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold font-sans"
        onClick={handleLogin} // Call the handleLogin function
      >
        <AiOutlineFileDone className="text-3xl" />
        Submit
      </button>

      <GoogleButton className="m-4 shadow-md hover:scale-105" />
    
        <motion.div
      variants={{
        hidden: {opacity: 0, x: -75},
        visible: {opacity: 1, x: 0},
      }}
      initial="hidden"
      animate="visible"
      transition={{duration: 1, delay: 1}}
       className="bg-green-200 flex rounded-lg px-4 py-2 items-center shadow-md border-2">
        <p className="text-black mr-2 font-serif text-lg">Don't have an account?</p>
      <Link className="hover:scale-110 hover:shadow-lg duration-200 bg-green-400 flex rounded-md px-4 py-2 mr-2 items-center mt-mb-4 shadow-md " to="/signup">
        <GrUserAdd className="text-lg mr-1"/> SIGN UP</Link>
      </motion.div>
      </div>
    </div>

  );
};

export default Login;
