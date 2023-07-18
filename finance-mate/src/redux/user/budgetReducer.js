import userActionTypes from "./user.type";
const initialState = []

//
const budgetReducer = (state = initialState, action) => {
    switch(action.type){
        //adds the budget to the redux store slice
        case (userActionTypes.ADD_BUDGET): {
            return [...state, action.payload]
        }
        //gets the budget from the server and stores it in the redux store
        case (userActionTypes.GET_BUDGET): {
            return action.payload
        }
        default: {
            return state
        }
    }
}

export default budgetReducer
