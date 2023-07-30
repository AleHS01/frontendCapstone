import transactionType from "./transaction.type";
import axios from "axios";

export const getTransactions = (transactions) => ({
  type: transactionType.GET_TRANS,
  payload: transactions,
});

export const getTransactionsThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/plaid/transactions`,
        {},
        {
          withCredentials: true,
        }
      );
      const transactions = await response.data;

      dispatch(getTransactions(transactions));
    } catch (error) {}
  };
};
