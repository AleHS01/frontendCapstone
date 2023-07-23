import { GrPackage } from "react-icons/gr";
import userTypes from "./groups.action.types";
const initialState = {}


const groupReducer = (state = initialState, action)=> {
    switch(action.type){
        case (userTypes.CREATE_GROUP):{
            return action.payload
        }
        default: {
            return state
        }

    }
}

export default groupReducer