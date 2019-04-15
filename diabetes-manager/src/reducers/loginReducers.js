import { FETCHING_LOGIN, SUCCESS_LOGIN, FAILURE_LOGIN } from "../actions";

const intitalState = {
  isFetching: false,
  isLoggedIn: false,
  error: ""
};

export const loginReducers = (state = intitalState, action) => {
  switch (action.type) {
    case FETCHING_LOGIN:
      return {
        isFetching: true,
        isLoggedIn: false,
        error: ""
      };
    case SUCCESS_LOGIN:
      return {
        isLoggedIn: true,
        isFetching: false,
        error: ""
      };
    case FAILURE_LOGIN:
      return {
        error: action.payload,
        isFetching: false,
        isLoggedIn: false
      };
    default:
      return state;
  }
};
