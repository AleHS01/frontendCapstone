import userActionTypes from "./user.type";
const initialState = []

const addBudgetReducer = (state = initialState, action) => {
    switch(action.type){
        case (userActionTypes.ADD_BUDGET): {
            return action.payload
        }
        default: {
            return state
        }
    }
}

export default addBudgetReducer
