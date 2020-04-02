import axios from "../../axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const FETCH_USER_DASHBOARD_SUCCESS = "FETCH_USER_DASHBOARD_SUCCESS";
export const CREATE_CHARACTER_SUCCESS = "CREATE_CHARACTER_SUCCESS";

const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: token
});

export const login = data => async dispatch => {
  const { username, password } = data;
  try {
    const res = await axios.post("/login", {
      username,
      password
    });
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.error(err);
  }
};

const signupSuccess = () => ({
  type: SIGNUP_SUCCESS
});

export const signup = data => async dispatch => {
  try {
    const res = await axios.post("/signup", data);
    dispatch(signupSuccess(res.data));
  } catch (err) {
    console.error(err);
  }
};

const fetchUserDashboardSuccess = data => ({
  type: FETCH_USER_DASHBOARD_SUCCESS,
  payload: data
});

export const fetchUserDashboard = userId => async (dispatch, getState) => {
  try {
    const token = getState().user.token;
    const res = await axios.get(`/user/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch(fetchUserDashboardSuccess(res.data));
  } catch (err) {
    console.error(err);
  }
};

const createCharacterSuccess = character => ({
  type: CREATE_CHARACTER_SUCCESS,
  payload: character
});

export const createCharacter = data => async (dispatch, getState) => {
  try {
    const token = getState().user.token;
    const res = await axios.post(`/user/${data.userId}/character`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch(createCharacterSuccess(res.data));
  } catch (err) {
    console.error(err);
  }
};
