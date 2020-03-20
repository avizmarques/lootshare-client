import axios from "../../axios";

export const FETCH_PARTIES_SUCCESS = "FETCH_PARTIES_SUCCESS";

const fetchPartiesSuccess = parties => ({
  type: FETCH_PARTIES_SUCCESS,
  payload: parties
});

export const fetchParties = userId => async (dispatch, getState) => {
  try {
    const token = getState().user.token;
    const res = await axios.get(`user/${userId}/party`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log(res);
    dispatch(fetchPartiesSuccess(res.data));
  } catch (err) {
    console.error(err);
  }
};
