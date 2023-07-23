import userTypes from "./groups.action.types";
import axios from "axios";

export const createGroup = (groupName) => ({
    type: userTypes.CREATE_GROUP,
    payload: groupName

})

export const createGroupThunk = (groupName) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("http://localhost:8080/api/group/create", groupName, {
                withCredentials: true
            })
            console.log("The group object from server inside Thunk:", response.data)
            dispatch(createGroup(response.data)) // Just in case we add more stuff for the server to return, instead of just the name of the group.
        } catch (error) {
            console.log(error)
            
        }
    }
}