import { data } from "../3h_bloodsugar";
import { overallData } from "../7day_bloodsugar";
import axios from "axios";

export const FETCHING_USER_DATA = "FETCHING_USER_DATA";
export const FAILURE_GETTING_USER_DATA = "FAILURE_GETTING_USER_DATA";
export const GETTING_USER_DATA = "GETTING_USER_DATA";
export const UPDATING_USER_DATA = "UPDATING_USER_DATA";
export const ERROR_UPDATING_USER = "ERROR_UPDATING_USER";
export const FETCHING_SUGAR_LEVELS = "FETCHING_SUGAR_LEVELS";
export const SUCCESS_SUGAR_LEVELS = "SUCCESS_SUGAR_LEVELS";
export const SUCCESS_OVERALL_SUGAR_LEVELS = "SUCCESS_OVERALL_SUGAR_LEVELS";
export const FAILURE_GETTING_SUGAR_LEVELS = "FAILURE_GETTING_SUGAR_LEVELS";

export const getUser = id => async dispatch => {
  dispatch({
    type: FETCHING_USER_DATA
  });
  try {
    const res = await axios.get(
      `https://arcane-woodland-11613.herokuapp.com/api/users/${id}`
    );
    dispatch({
      type: GETTING_USER_DATA,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FAILURE_GETTING_USER_DATA,
      payload: "couldn't receive data"
    });
  }
};

export const updateUserInfo = (newUserInfo, id) => async dispatch => {
  try {
    const res = await axios.put(
      `https://arcane-woodland-11613.herokuapp.com/api/users/${id}`,
      newUserInfo
    );
    dispatch({
      type: UPDATING_USER_DATA,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR_UPDATING_USER,
      payload: "couldnt update user"
    });
  }
};

export const getData = () => dispatch => {
  try {
    dispatch({
      type: SUCCESS_SUGAR_LEVELS,
      payload: data
    });
    dispatch({
      type: SUCCESS_OVERALL_SUGAR_LEVELS,
      payload: overallData
    });
  } catch (err) {
    dispatch({
      type: FAILURE_GETTING_SUGAR_LEVELS,
      payload: err
    });
  }
};
