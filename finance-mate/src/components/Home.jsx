import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { googleLoginThunk } from "../redux/user/user.action";
import { BiLogIn } from "react-icons/bi";
import { GrUserAdd } from "react-icons/gr";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        navigate("/user");
      }
    }, 500);
  };

  return (
    <div>
      <div className="flex flex-col   p-4 ">
        <h6 className="text-white my-10 bg-black p-4 rounded-md text-2xl font-extrabold">
          FINANCE-MATE
        </h6>

        <div className="flex items-end justify-between p-12 pt-16">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold mb-4 text-5xl">
              Send Money Instantly
            </h1>
            <p className="text-lg mb-2">
              Finance-Mate keeps track of your expenses
            </p>
            <p className="text-lg mb-2">
              Need some capital? Try our SUSU feature
            </p>
          </div>

          <div className="flex flex-col items-center ">
            <Link
              to="/login"
              className="bg-green-600 flex rounded-md px-4 py-2 mr-4 items-center mb-4 shadow-md "
            >
              <BiLogIn className="text-lg mr-1"/>
              <p className="text-black mr-2 ">Log back in!</p>
              <p className="hover:scale-110 hover:shadow-lg hover:text-black hover:bg-white duration-300 bg-black p-1.5 rounded-md text-white font-bold">
                Log In
              </p>
            </Link>

            <Link
              to="/signup"
              className="bg-green-600 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md"
            ><GrUserAdd className="text-lg mr-1"/>
              
              <p className="text-black mr-2">Join Finance Mate</p>
              <p className="hover:scale-110 hover:shadow-lg hover:text-black hover:bg-white duration-300 bg-black p-1.5 rounded-md text-white font-bold">
                Sign Up
              </p>
            </Link>
            <GoogleButton className="m-4 shadow-md hover:scale-105" onClick={googleLogin} />
          </div>
        </div>
      </div>
      <footer className="bg-green-600 "></footer>
    </div>
  );
}

export default Home;
