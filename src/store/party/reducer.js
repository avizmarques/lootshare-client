import { FETCH_PARTY_SUCCESS, TRANSACTION_SUCCESS } from "./actions";

const initialState = {
  allParties: [],
  currentParty: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PARTY_SUCCESS:
      return { ...state, currentParty: action.payload };
    case TRANSACTION_SUCCESS:
      return {
        ...state,
        currentParty: { ...state.currentParty, chest: action.payload.chest }
      };
    default:
      return state;
  }
}
