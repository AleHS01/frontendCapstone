import userActionTypes from "./user.type";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.LOGIN_SUCCESS:
      return action.payload;
    case userActionTypes.LOGIN_WITH_GOOGLE:
      return {
        ...state,
        user: action.payload,
      };
    case userActionTypes.GET_ACCESS_TOKEN:
      return {
        ...state,
        user: {
          ...state.user,
          plaidAccessToken: action.payload.access_token,
          plaidItemId: action.payload.item_id,
        },
      };
    case userActionTypes.FETCH_USER:
      return action.payload;

    case userActionTypes.LOGOUT_USER:
      return {};
    default:
      return state;
  }
};

export default userReducer;
