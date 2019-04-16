import { GETTING_USER_DATA, SUCCESS_SUGAR_LEVELS } from "../actions";
const intitalState = {
  updatingUserInfo: false,
  gettingUserInfo: false,
  userInfo: {},
  sugarLevels: []
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
        sugarLevels: action.payload
      };
    default:
      return state;
  }
};
