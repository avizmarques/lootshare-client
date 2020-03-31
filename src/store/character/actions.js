import axios from "../../axios";

export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";

const fetchCharacterSuccess = character => ({
  type: FETCH_CHARACTER_SUCCESS,
  payload: character
});

export const fetchCharacter = characterId => async (dispatch, getState) => {
  try {
    const token = getState().user.token;
    const res = await axios.get(`character/${characterId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch(fetchCharacterSuccess(res.data));
  } catch (err) {
    console.error(err);
  }
};
