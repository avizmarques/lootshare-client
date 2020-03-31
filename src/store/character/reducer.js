import { FETCH_CHARACTER_SUCCESS } from "./actions";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
