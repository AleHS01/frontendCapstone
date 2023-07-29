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
        `${process.env.REACT_APP_BACKEND_URL}/api/group/create`,
        { name: group.name, amount: group.amount },
        {
          withCredentials: true,
        }
      );

      dispatch(createGroup(response.data)); // Just in case we add more stuff for the server to return, instead of just the name of the group.
    } catch (error) {}
  };
};

export const getGroupsThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/group/get_all_groups`,
        { withCredentials: true }
      );
      dispatch(getGroups(response.data));
    } catch (error) {}
  };
};

export const joinGroupThunk = (GroupId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/group/add_member`,
        { GroupId },
        { withCredentials: true }
      );
      dispatch(getGroups(response.data));
    } catch (error) {}
  };
};

export const getMembersThunk = (GroupId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/group/all_members`,
        { GroupId },
        { withCredentials: true }
      );

      dispatch(getMembers(response.data));
    } catch (error) {}
  };
};
