import {
  FETCH_ALL_PARTIES_SUCCESS,
  FETCH_PARTY_SUCCESS,
  PARTY_TRANSACTION_SUCCESS
} from "./actions";

const initialState = {
  allParties: [],
  currentParty: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_PARTIES_SUCCESS:
      return { ...state, allParties: action.payload };
    case FETCH_PARTY_SUCCESS:
      return { ...state, currentParty: action.payload };
    case PARTY_TRANSACTION_SUCCESS:
      return {
        ...state,
        currentParty: { ...state.currentParty, chest: action.payload.chest }
      };
    default:
      return state;
  }
}
