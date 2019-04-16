import { data } from "../3h_bloodsugar";

export const GETTING_USER_DATA = "GETTING_USER_DATA";
export const UPDATING_USER_DATA = "UPDATING_USER_DATA";
export const FETCHING_SUGAR_LEVELS = "FETCHING_SUGAR_LEVELS";
export const SUCCESS_SUGAR_LEVELS = "SUCCESS_SUGAR_LEVELS";
export const FAILURE_GETTING_SUGAR_LEVELS = "FAILURE_GETTING_SUGAR_LEVELS";

export const getUser = () => dispatch => {
  dispatch({
    type: GETTING_USER_DATA
  });
};

export const getData = () => dispatch => {
  try {
    dispatch({
      type: SUCCESS_SUGAR_LEVELS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: FAILURE_GETTING_SUGAR_LEVELS,
      payload: err
    });
  }
};
