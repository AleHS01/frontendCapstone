import userActionTypes from "./user.type";
const initialState = []

const getBudgetCategoryName = (state = initialState, action) => {
    switch(action.type){
        case (userActionTypes.GET_BUDGET_NAMES):{
            return action.payload
        }default: {
            return state
        }
    }
}
export default getBudgetCategoryName
