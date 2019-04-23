// import axios from "axios";

export const FETCHING_LOGIN = "FETCHING_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const FAILURE_LOGIN = "FAILURE_LOGIN";

export const loggedIn = creds => dispatch => {
  dispatch({
    type: FETCHING_LOGIN
  });
  localStorage.setItem("token", "hi");
  dispatch({
    type: SUCCESS_LOGIN
  });
};
