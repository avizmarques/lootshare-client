import { FETCH_PARTIES_SUCCESS } from "./actions";

const initialState = {
  allParties: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PARTIES_SUCCESS:
      return { ...state, allParties: action.payload };
    default:
      return state;
  }
}
