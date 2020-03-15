import axios from "axios";

const baseUrl = "http://localhost:4000";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: token
});

export const login = data => async dispatch => {
  const { username, password } = data;
  try {
    const res = await axios.post(`${baseUrl}/login`, {
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
    const res = await axios.post(`${baseUrl}/signup`, data);
    dispatch(signupSuccess(res.data));
  } catch (err) {
    console.error(err);
  }
};
