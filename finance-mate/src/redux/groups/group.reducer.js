
import userTypes from "./groups.action.types";
const initialState = []


const groupReducer = (state = initialState, action)=> {
    switch(action.type){
        case (userTypes.CREATE_GROUP):{
            return action.payload
        }
        case (userTypes.GET_GROUPS): {
            return action.payload
        }
        case (userTypes.JOIN_GROUP): {
            return action.payload
        }
        case (userTypes.GET_MEMBERS): {
            return action.payload
        }
        default: {
            return state
        }

    }
}

export default groupReducer