const initialState = []
import stripeActionTypes from "./stripe.action.types"
const stripeReducer = (state = initialState, action) => {
    switch(action.type){
        case (stripeActionTypes.CREATE_CUSTOMER): {
            return action.payload
        }
        default: {
            return state
        }
    }
}

export default stripeReducer