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
        `${process.env.REACT_APP_BACKEND_URL}/api/plaid/accounts`,
        {},
        {
          withCredentials: true,
        }
      );
      const accounts = response.data.accounts;

      dispatch(getAccounts(accounts));
    } catch (error) {}
  };
};
