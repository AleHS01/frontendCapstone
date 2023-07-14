import axios from "axios";
import userActionTypes from "./user.type";

export const fetchUser = (payload) => ({
  type: userActionTypes.FETCH_USER,
  payload: payload,
});

export const logoutUser = () => ({
  type: userActionTypes.LOGOUT_USER,
});

export const loginSuccess = (user) => ({
  type: userActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const getAccessToken = (access_token, item_id) => ({
  type: userActionTypes.GET_ACCESS_TOKEN,
  payload: {
    access_token: access_token,
    item_id: item_id,
  },
});

export const fetchUserThunk = () => {
  console.log("got to the thunk");
  return async (dispatch, getState) => {
    // Check if the user is logged in
    const isLoggedIn = getState().user.user !== null;
    if (!isLoggedIn) {
      console.log("not logged :(");
      return;
    }

    try {
      const response = await axios.get("http://localhost:8080/api/user", {
        withCredentials: true,
      });
      dispatch(fetchUser(response.data));
      console.log("Response: ", response);
    } catch (error) {
      console.log(error);
    }
  };
};

export const logoutUserThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:8080/api/logout");
      dispatch(logoutUser());
      console.log(response.data); // Assuming the backend sends a "Logout successful" message
      // Add any additional logic after successful logout if needed
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginUserThunk = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        credentials,
        {
          withCredentials: true,
        }
      );
      const user = response.data; // Assuming the login API response contains the user data
      console.log("User\n", response.data);
      dispatch(loginSuccess(user));
      // Additional logic after successful login
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAccessTokenThunk = (public_token) => {
  return async (dispatch) => {
    try {
      console.log("Public Token in Thunk: ", public_token);
      const response = await axios.post(
        "http://localhost:8080/api/plaid/exchange_public_token",
        { public_token: public_token },
        {
          withCredentials: true,
        }
      );
      console.log("Response data", response.data);
      const { access_token, item_id } = response.data;
      dispatch(getAccessToken(access_token, item_id));
    } catch (error) {
      console.log(error);
    }
  };
};
