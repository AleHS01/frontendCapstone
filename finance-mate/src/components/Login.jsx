import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginUserThunk} from "../redux/user/user.action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch(); // Get the dispatch function
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      dispatch(loginUserThunk({ username, password })); // Dispatch the login thunk action

      setPassword("");
      setUsername("");
      navigate("/user");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Link to Home */}
      <Link className="absolute top-0 right-0 bg-green-600 flex rounded-md px-4 py-2 m-4 shadow-md font-semibold font-sans rounded-lg border-4" to="/">Home</Link>

      <h1 className=" flex justify-center text-white my-5 bg-black p-4 rounded-md text-2xl font-extrabold border-8 shadow-lg">Welcome to Finance-Mate <br/> Take Control of Your Finances</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        //TailWindCSS
        className="mb-4 py-2 px-4 border border-black rounded-md shadow-lg focus:outline-none focus:border-green-500"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        //TailWindCSS
        className="mb-4 py-2 px-4 border border-black rounded-md shadow-lg focus:outline-none focus:border-green-500"
      />

      <button
      //TailWindCSS
        className="bg-green-600 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md border-4 font-semibold font-sans"
        onClick={handleLogin} // Call the handleLogin function
        >Submit</button>

      <br/>
      <div className="bg-green-600 flex rounded-lg px-4 py-2 mr-4 items-center mb-4 shadow-md border-8 ">
        <p className="text-black mr-2 font-serif text-xl">Don't have an account?</p>
      <Link className="bg-green-500 flex rounded-md px-4 py-2 mr-4 items-center mb-4 shadow-md " to="/signup">
        <p className="bg-black p-1.5 rounded-md text-white font-bold">Sign Up</p>
      </Link>
      </div>


        <div className="m-4 bg-green-600 flex rounded-lg px-6 py-3 mr-4 items-center mb-4 shadow-md border-8 ">
          <p className="text-base font-serif p-4 border border-green-500 border-opacity-50 rounded-lg bg-gradient-to-r from-green-100 to-green-200 text-lg">
            <h1 className="flex justify-center font-semibold text-xl font-serif">Finance-Mate</h1>
          Welcome to Finance-Mate, your trusted companion for financial management. 
          Unlock the power to take control of your money and achieve your financial goals with ease. 
          Our user-friendly platform provides intuitive tools and comprehensive insights to simplify your financial journey. 
          Seamlessly track your expenses, analyze your spending patterns, and effortlessly budget for a secure future. 
          With Finance-Mate, you can securely manage your accounts, make seamless transactions, and stay informed about your financial health, all in one place. 
          Experience the convenience, security, and peace of mind that comes with Finance-Mate. Join us today and embark on a smarter, more rewarding financial journey.
          </p>
          
        </div>

    </div>
  );
};

export default Login;
