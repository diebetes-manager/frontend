import { GETTING_USER_DATA } from "../actions";
const intitalState = {
  updatingUserInfo: false,
  gettingUserInfo: false,
  userInfo: {}
};

export const dashboardReducers = (state = intitalState, action) => {
  switch (action.type) {
    case GETTING_USER_DATA:
      return {
        gettingUserInfo: true,
        userInfo: {
          name: "joseph",
          age: 21,
          height: "5 ft 9 in",
          weight: "140lbs"
        }
      };
    default:
      return state;
  }
};
