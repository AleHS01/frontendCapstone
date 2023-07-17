import userActionTypes from "./user.type";
const initialState = []

const getBudgetReducer = (state = initialState, action) => {
    switch(action.type){
        case(userActionTypes.GET_BUDGET): {
            return action.payload
        }
        default:  {
            return state
        }
    }
}

export default getBudgetReducer