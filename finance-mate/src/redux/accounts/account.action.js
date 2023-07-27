import accountTypes from "./account.type";
import axios from "axios";

export const getAccounts = (accounts) => ({
  type: accountTypes.GET_ACCOUNT,
  payload: accounts,
});

export const getAccountsThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/plaid/accounts",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
          withCredentials: true,
        }
      );
      const accounts = response.data.accounts;
      console.log("User bank account types:", accounts);
      dispatch(getAccounts(accounts));
    } catch (error) {
      console.log(error);
    }
  };
};
