import React, { useEffect } from "react";
import { getAccountsThunk, fetchUserThunk } from "../redux/user/user.action";
import { useSelector, useDispatch } from "react-redux";
// import { loginUserThunk } from "../redux/user/user.action";
import SideBar from "./side-bar";

const Accounts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
    console.log("here",state);

  const accounts = useSelector((state) => state.user_accounts);
  console.log("accounts", accounts)
  const user = useSelector((state) => state.user.user);
  console.log("user-->",user);

  const getUser = async () => {
    try {
      dispatch(fetchUserThunk());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser().then(() => dispatch(getAccountsThunk()));
  }, []);
  


return (

    <div className="dashboard">
        <SideBar></SideBar>
      <div className="content">
      {accounts.map((account, index) => (
        <div key={index}>
          <h3>Account Name: {account.name}</h3>
          <p>Subtype: {account.subtype}</p>
          <p>Available Balance: {account.balances.available}</p>
          <p>Current Balance: {account.balances.current}</p>
          <hr />
        </div>
      ))}

      </div>
    </div>


  );
};

export default Accounts;
