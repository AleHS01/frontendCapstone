import axios from "axios";
import stripeActionTypes from "./stripe.action.types";

export const createCustomer = (payload) => ({
  type: stripeActionTypes.CREATE_CUSTOMER,
  payload: payload,
});

export const activateCommittee = (payload) => ({
  type: stripeActionTypes.ACTIVATE_COMMITTEE,
  payload: payload,
});

export const getCommitteeProduct = (payload) => ({
  type: stripeActionTypes.GET_COMMITTEE_PRODUCT,
  payload: payload,
});

export const createCustomerThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/stripe/create_customer`,
        {},
        {
          withCredentials: true,
        }
      );

      dispatch(createCustomer(response.data));
    } catch (error) {}
  };
};

export const activateCommitteeThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/stripe/activate_committee`,
        {},
        { withCredentials: true }
      );
      dispatch(activateCommittee(response.data));
    } catch (error) {}
  };
};

export const getCommitteeProductThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/stripe/get_committee_product`,
        {},
        { withCredentials: true }
      );

      dispatch(getCommitteeProduct(response.data));
    } catch (error) {}
  };
};

export const createCheckoutSession = (payload) => ({
  type: stripeActionTypes.CREATE_CHECKOUT_SESSION,
  payload: payload,
});

export const createCheckoutSessionThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/stripe/create_checkout_session`,
        {},
        { withCredentials: true }
      );

      dispatch(createCheckoutSession(response.data));
    } catch (error) {}
  };
};
