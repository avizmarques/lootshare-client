import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  FETCH_USER_DASHBOARD_SUCCESS
} from "./actions";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userName: action.payload.userName,
        id: action.payload.id
      };
    case SIGNUP_SUCCESS:
      return { ...state, userCreated: true };
    case FETCH_USER_DASHBOARD_SUCCESS:
      return {
        ...state,
        parties: action.payload.parties,
        characters: action.payload.characters
      };
    default:
      return state;
  }
}
