import { FETCH_CHARACTER_SUCCESS } from "./actions";
import { CHARACTER_TRANSACTION_SUCCESS } from "../party/actions";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTER_SUCCESS:
      return action.payload;
    case CHARACTER_TRANSACTION_SUCCESS:
      return { ...state, chest: action.payload.chest };
    default:
      return state;
  }
}
