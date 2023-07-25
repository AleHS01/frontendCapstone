import userTypes from "./groups.action.types";
import axios from "axios";

export const createGroup = (groupName) => ({
  type: userTypes.CREATE_GROUP,
  payload: groupName,
});

export const getGroups = (payload) => ({
  type: userTypes.GET_GROUPS,
  payload: payload,
});

export const joinGroup = (payload) => ({
  type: userTypes.JOIN_GROUP,
  payload: payload,
});

export const getMembers = (payload) => ({
  type: userTypes.GET_MEMBERS,
  payload: payload,
});

export const createGroupThunk = (group) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/group/create",
        { name: group.name },
        {
          withCredentials: true,
        }
      );
      console.log("The group object from server inside Thunk:", response.data);
      dispatch(createGroup(response.data)); // Just in case we add more stuff for the server to return, instead of just the name of the group.
    } catch (error) {
      console.log(error);
    }
  };
};

export const getGroupsThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/group/get_all_groups",
        { withCredentials: true }
      );
      dispatch(getGroups(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const joinGroupThunk = (GroupId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/group/add_member",
        { GroupId },
        { withCredentials: true }
      );
      dispatch(getGroups(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMembersThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/group/all_members",
        { withCredentials: true }
      );
      dispatch(getMembers(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
