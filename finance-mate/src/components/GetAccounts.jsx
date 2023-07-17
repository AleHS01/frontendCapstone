import React, { useEffect } from "react";
import { getAccountsThunk, fetchUserThunk } from "../redux/user/user.action";
import { useSelector, useDispatch } from "react-redux";
// import { loginUserThunk } from "../redux/user/user.action";
import SideBar from "./side-bar";
import { height } from "@mui/system";

const Accounts = () => {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  //   console.log("here",state);

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
        <div key={index} style={{
          fontFamily: 'Times New Roman',
          display: '',
          fontWeight: 'normal',
          fontSize: '20px',
          backgroundBlendMode: 'linear',
          border: '1px solid black',
          borderRadius: '10px',
          padding: '0.5em 0.5em 0.5em',
          margin: '10px',
          height: 'auto',
          width: '50%',
          backgroundColor: 'white'
        }}>
          <h1>Account Name: {account.name}</h1>
          <h3>Subtype: {account.subtype}</h3>
          <h3>Available Balance: {account.balances.available}</h3>
          <h3>Current Balance: {account.balances.current}</h3>
          <hr />
        </div>
      ))}

      </div>
    </div>


  );
};

export default Accounts;
