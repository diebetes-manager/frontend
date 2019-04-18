import {
  GETTING_USER_DATA,
  SUCCESS_SUGAR_LEVELS,
  SUCCESS_OVERALL_SUGAR_LEVELS,
  UPDATING_USER_DATA,
  FETCHING_SUGAR_LEVELS
} from "../actions";

const intitalState = {
  updatingUserInfo: false,
  gettingUserInfo: false,
  fetchingData: false,
  userInfo: {
    id: 1,
    name: "joseph rios",
    age: 35,
    height: "5 ft 9in",
    weight: "140 lbs"
  },
  overallData: [],
  overallSugarLevels: [],
  allData: [],
  bloodSugarLevels: [],
  times: [],
  prediction: []
};

export const dashboardReducers = (state = intitalState, action) => {
  switch (action.type) {
    case GETTING_USER_DATA:
      return {
        gettingUserInfo: true,
        ...state.userInfo
      };
    case FETCHING_SUGAR_LEVELS:
      return {
        ...state,
        fetchingData: true
      };
    case SUCCESS_SUGAR_LEVELS:
      return {
        ...state,
        allData: action.payload,
        bloodSugarLevels: action.payload.map(data => data.value),
        times: action.payload.map(data => data.timestamp),
        fetchingData: false
      };
    case UPDATING_USER_DATA:
      return {
        ...state,
        updateUserInfo: true,
        userInfo: action.payload //state.userInfo.map(user =>
        //   user.id === action.payload.id ? (user = action.payload) : user
        // )
      };
    default:
      return state;
  }
};
