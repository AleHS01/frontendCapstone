import userActionTypes from "../user/user.type";
const initialState = [];

const getAccountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.GET_ACCOUNT:
      return action.payload;

    default:
      return state;
  }
};

export default getAccountsReducer;
