import userActionTypes from "./user.type";
const initialState=[];
const getTransReducer=(state=initialState,action)=>{
    switch (action.type){
        case (userActionTypes.GET_TRANS):
            return action.payload
        default:
            return state
    }
}

export default getTransReducer;