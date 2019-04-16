export const GETTING_USER_DATA = "GETTING_USER_DATA";
export const UPDATING_USER_DATA = "UPDATING_USER_DATA";

export const getUser = () => dispatch => {
  dispatch({
    type: GETTING_USER_DATA
  });
};
