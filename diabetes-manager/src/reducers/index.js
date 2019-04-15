import { combineReducers } from "redux";
import { dashboardReducers } from "./dashboardReducers";
import { loginReducers } from "./loginReducers";

export default combineReducers({
  dashboardReducers,
  loginReducers
});
