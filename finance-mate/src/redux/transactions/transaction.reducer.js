import transactionType from "./transaction.type";
const initialState = [];
const getTransReducer = (state = initialState, action) => {
  switch (action.type) {
    case transactionType.GET_TRANS:
      return action.payload;
    default:
      return state;
  }
};

export default getTransReducer;
