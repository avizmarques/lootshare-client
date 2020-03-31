import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import partyReducer from "./party/reducer";
import characterReducer from "./character/reducer";

export default combineReducers({
  user: userReducer,
  party: partyReducer,
  character: characterReducer
});
