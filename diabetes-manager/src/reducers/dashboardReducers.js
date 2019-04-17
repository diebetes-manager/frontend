import {
  GETTING_USER_DATA,
  SUCCESS_SUGAR_LEVELS,
  SUCCESS_OVERALL_SUGAR_LEVELS,
  UPDATING_USER_DATA
} from "../actions";

const intitalState = {
  updatingUserInfo: false,
  gettingUserInfo: false,
  userInfo: {
    id: 1,
    name: "joseph rios",
    age: 35,
    height: "5 ft 9in",
    weight: "140 lbs"
  },
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
        ...state.userInfo
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
    case UPDATING_USER_DATA:
      return {
        ...state,
        updateUserInfo: true,
        userInfo: state.userInfo.map(user =>
          user.id === action.payload.id ? (user = action.payload) : user
        )
      };
    default:
      return state;
  }
};
