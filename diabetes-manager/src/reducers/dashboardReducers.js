import {
  GETTING_USER_DATA,
  SUCCESS_SUGAR_LEVELS,
  SUCCESS_OVERALL_SUGAR_LEVELS
} from "../actions";

const intitalState = {
  updatingUserInfo: false,
  gettingUserInfo: false,
  userInfo: {},
  overallData: [],
  overallSugarLevels: [],
  data: [],
  bloodSugarLevels: [],
  times: []
};

export const dashboardReducers = (state = intitalState, action) => {
  switch (action.type) {
    case GETTING_USER_DATA:
      return {
        gettingUserInfo: true,
        userInfo: { name: "joseph" }
      };
    case SUCCESS_SUGAR_LEVELS:
      return {
        ...state,
        data: action.payload,
        bloodSugarLevels: action.payload.map(data => data.amount),
        times: action.payload.map(data => data.timestamp)
      };
    case SUCCESS_OVERALL_SUGAR_LEVELS:
      return {
        ...state,
        overallData: action.payload,
        overallSugarLevels: action.payload.map(data => data.amount)
      };
    default:
      return state;
  }
};
