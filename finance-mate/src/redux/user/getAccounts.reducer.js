import userActionTypes from "./user.type";
const initialState = []

const getAccountsReducer = (state = initialState, action) => {
    switch(action.type){
        case (userActionTypes.GET_ACCOUNT):
            return action.payload
        case userActionTypes.LOGOUT_USER:
            return [];
        default:
            return state
    }
}

export default getAccountsReducer