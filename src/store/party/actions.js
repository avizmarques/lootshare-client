import axios from "../../axios";

export const FETCH_PARTIES_SUCCESS = "FETCH_PARTIES_SUCCESS";
export const FETCH_PARTY_SUCCESS = "FETCH_PARTY_SUCCESS";
export const TRANSACTION_SUCCESS = "TRANSACTION_SUCCESS";

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
    dispatch(fetchPartiesSuccess(res.data));
  } catch (err) {
    console.error(err);
  }
};

const fetchPartySuccess = party => ({
  type: FETCH_PARTY_SUCCESS,
  payload: party
});

export const fetchParty = partyId => async (dispatch, getState) => {
  try {
    const token = getState().user.token;
    const res = await axios.get(`party/${partyId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch(fetchPartySuccess(res.data));
  } catch (err) {
    console.error(err);
  }
};

const transactionSuccess = updatedChest => ({
  type: TRANSACTION_SUCCESS,
  payload: updatedChest
});

export const makeTransaction = data => async (dispatch, getState) => {
  try {
    const token = getState().user.token;
    const res = await axios.post(`chest/${data.chestId}/transaction`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch(transactionSuccess(res.data));
  } catch (err) {
    console.error(err);
  }
};
