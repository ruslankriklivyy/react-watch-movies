import { authAPI } from '../../api/api';

const GET_TOKEN = 'GET_TOKEN';
const GET_SESSION_ID = 'GET_SESSION_ID';
const SET_USER = 'SET_USER';

export const getToken = () => async (dispatch) => {
  const token = await authAPI.getUserToken();
  if (token.request_token) {
    const localToken = localStorage.getItem('token');
    dispatch(setToken(JSON.parse(localToken)));
  }
};

export const getUser = (username, password, token) => async (dispatch) => {
  const data = await authAPI.createSessionLogin(username, password, token);
  dispatch(setUsers(data));
};

export const getSessionId = (token) => async (dispatch) => {
  const sessionId = await authAPI.getSessionId(token);

  dispatch(setSessionId(sessionId));
};

export const setUsers = (username, password) => ({
  type: SET_USER,
  username,
  password,
});

export const setToken = (token) => ({
  type: GET_TOKEN,
  payload: token,
});

export const setSessionId = (id) => ({
  type: GET_SESSION_ID,
  payload: id,
});
