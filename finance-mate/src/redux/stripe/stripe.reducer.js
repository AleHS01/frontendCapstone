import stripeActionTypes from "./stripe.action.types"
const initialState = {
  customer: null,
  product: null,
  sessionId: null,
  new_committee: null
};
const stripeReducer = (state = initialState, action) => {
  switch (action.type) {
    case stripeActionTypes.CREATE_CUSTOMER:
      return {
        ...state,
        customer: action.payload
      };

    case stripeActionTypes.ACTIVATE_COMMITTEE:
      return {
        ...state,
        product: action.payload.product,
        new_committee: action.payload.new_committee
      };
    case stripeActionTypes.GET_COMMITTEE_PRODUCT:
        return {
            ...state,
            product: action.payload.product
        }
    case stripeActionTypes.CREATE_CHECKOUT_SESSION:
        return {
              ...state,
              sessionId: action.payload
            };

    default:
      return state;
  }
};

export default stripeReducer;
