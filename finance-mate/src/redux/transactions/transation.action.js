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
        "http://localhost:8080/api/plaid/transactions",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
          withCredentials: true,
        }
      );
      const transactions = await response.data;
      console.log("Transactions in thunk:", transactions);
      dispatch(getTransactions(transactions));
    } catch (error) {
      console.log(error);
    }
  };
};
