import React, { useEffect } from "react";
import { getAccountsThunk, fetchUserThunk } from "../redux/user/user.action";
import { useSelector, useDispatch } from "react-redux";
// import { loginUserThunk } from "../redux/user/user.action";

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
    if (!user) {
      getUser().then(() => dispatch(getAccountsThunk()));
    }
  }, [user, dispatch]);
  


return (
    <div>
      <h1>Accounts</h1>
      {accounts.map((account) => (
        <div key={account.id}>{account.name}</div>
      ))}
    </div>
  );
};

export default Accounts;
