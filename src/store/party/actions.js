import axios from "../../axios";

export const FETCH_ALL_PARTIES_SUCCESS = "FETCH_ALL_PARTIES_SUCCESS";
export const FETCH_PARTY_SUCCESS = "FETCH_PARTY_SUCCESS";
export const CREATE_PARTY_SUCCESS = "CREATE_PARTY_SUCCESS";
export const PARTY_TRANSACTION_SUCCESS = "PARTY_TRANSACTION_SUCCESS";
export const CHARACTER_TRANSACTION_SUCCESS = "CHARACTER_TRANSACTION_SUCCESS";

const fetchAllPartiesSuccess = parties => ({
  type: FETCH_ALL_PARTIES_SUCCESS,
  payload: parties
});

export const fetchAllParties = () => async (dispatch, getState) => {
  try {
    const token = getState().user.token;
    const res = await axios.get(`/party`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch(fetchAllPartiesSuccess(res.data));
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
    const res = await axios.get(`/party/${partyId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch(fetchPartySuccess(res.data));
  } catch (err) {
    console.error(err);
  }
};

const createPartySuccess = party => ({
  type: CREATE_PARTY_SUCCESS,
  payload: party
});

export const createParty = data => async (dispatch, getState) => {
  try {
    const token = getState().user.token;
    const res = await axios.post(`/party`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch(createPartySuccess(res.data));
  } catch (err) {
    console.error(err);
  }
};

const partyTransactionSuccess = updatedChest => ({
  type: PARTY_TRANSACTION_SUCCESS,
  payload: updatedChest
});

const characterTransactionSuccess = updatedChest => ({
  type: CHARACTER_TRANSACTION_SUCCESS,
  payload: updatedChest
});

export const makeTransaction = data => async (dispatch, getState) => {
  try {
    const token = getState().user.token;
    const res = await axios.post(`/chest/${data.chestId}/transaction`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (data.typeChest === "party") {
      dispatch(partyTransactionSuccess(res.data));
    } else {
      dispatch(characterTransactionSuccess(res.data));
    }
  } catch (err) {
    console.error(err);
  }
};
