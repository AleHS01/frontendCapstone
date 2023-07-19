import React, { useEffect } from "react";
import { fetchUserThunk } from "../redux/user/user.action";
import { getAccountsThunk } from "../redux/accounts/account.action";
import { useSelector, useDispatch } from "react-redux";
// import { loginUserThunk } from "../redux/user/user.action";
import SideBar from "./side-bar";
import { height } from "@mui/system";
import creditdebit from "../images/creditdebit.png"; // Import the image
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

//MdOutlineAccountBalanceWallet

const Accounts = () => {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  //   console.log("here",state);

  const accounts = useSelector((state) => state.user_accounts);
  console.log("accounts", accounts);
  const user = useSelector((state) => state.user);
  console.log("user-->", user);

  useEffect(() => {
    try {
      dispatch(fetchUserThunk());
      dispatch(getAccountsThunk());
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="dashboard">
      <SideBar></SideBar>
      <div className="content p-7">
        <h6 className="text-white my-5 bg-black p-4 rounded-md text-2xl font-extrabold flex items-center ">
          <MdOutlineAccountBalanceWallet className="text-4xl mr-2" />
          Account Information
        </h6>

        {accounts.map((account, index) => (
          <div
            key={index}
            className="bg-green-600 flex rounded-md px-4 py-2 mr-4 items-center mb-4 shadow-md border-8 "
          >
            <h1 className="text-black mr-2 font-serif text-3xl font-semibold w-60">
              <img
                className="ml-4"
                src={creditdebit}
                alt="Plaid"
                style={{ width: "450px", height: "auto" }}
              />
            </h1>

            <span className="bg-black p-6 rounded-md text-white font-semibold font-serif text-xl border-2">
              <h1>Account Name: {account.name}</h1>
              <h3>Subtype: {account.subtype}</h3>
              <h3>Available Balance: ${account.balances.available}</h3>
              <h3>Current Balance: ${account.balances.current}</h3>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accounts;
