import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import partyReducer from "./party/reducer";

export default combineReducers({
  user: userReducer,
  party: partyReducer
});
