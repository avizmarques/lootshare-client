import { FETCH_PARTIES_SUCCESS, FETCH_PARTY_SUCCESS } from "./actions";

const initialState = {
  allParties: [],
  currentParty: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PARTIES_SUCCESS:
      return { ...state, allParties: action.payload };
    case FETCH_PARTY_SUCCESS:
      return { ...state, currentParty: action.payload };
    default:
      return state;
  }
}
