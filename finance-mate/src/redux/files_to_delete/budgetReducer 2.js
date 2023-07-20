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
        case (userActionTypes.GET_BUDGET_TOTAL_AMOUNT): {
            return action.payload
        }
        case userActionTypes.DELETE_A_BUDGET: {
            const deleteBudget = action.payload;
            return state.filter((budget) => budget.id !== deleteBudget.id);
        }
        default: {
            return state
        }
    }
}

export default budgetReducer
