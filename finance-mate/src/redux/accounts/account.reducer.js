import accountTypes from "./account.type";
const initialState = [];

const getAccountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case accountTypes.GET_ACCOUNT:
      return action.payload;
    default:
      return state;
  }
};

export default getAccountsReducer;
