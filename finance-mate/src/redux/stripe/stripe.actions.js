import axios from "axios"
import stripeActionTypes from "./stripe.action.types"
export const createCustomer = (payload) => ({
    type: stripeActionTypes.CREATE_CUSTOMER,
    payload: payload
})

export const createCustomerThunk = () => {
    return async (dispatch) => {
        try {
            const response = await axios.post("http://localhost:8080/api/stripe/create_customer", {withCredentials: true})
            dispatch(createCustomer(response.data))
            
        } catch (error) {
            console.log(error)
            
        }
    }
}