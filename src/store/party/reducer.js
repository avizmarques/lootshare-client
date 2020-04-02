import {
  FETCH_ALL_PARTIES_SUCCESS,
  FETCH_PARTY_SUCCESS,
  CREATE_PARTY_SUCCESS,
  PARTY_TRANSACTION_SUCCESS,
  TRANSFER_PARTY_TO_CHARACTER_SUCCESS
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
    case CREATE_PARTY_SUCCESS:
      return { ...state, allParties: [...state.allParties, action.payload] };
    case PARTY_TRANSACTION_SUCCESS:
      return {
        ...state,
        currentParty: { ...state.currentParty, chest: action.payload.chest }
      };
    case TRANSFER_PARTY_TO_CHARACTER_SUCCESS:
      return {
        ...state,
        currentParty: {
          ...state.currentParty,
          chest: action.payload[0].chest,
          characters: [
            ...state.currentParty.characters.map(char =>
              char.chestId === action.payload[1].chestId
                ? { ...char, chest: action.payload[1].chest }
                : char
            )
          ]
        }
      };
    default:
      return state;
  }
}
