import { authAPI } from '../../api/api';

const GET_TOKEN = 'GET_TOKEN';
const GET_SESSION_ID = 'GET_SESSION_ID';

export const getToken = () => async (dispatch) => {
  const token = await authAPI.getUserToken();
  dispatch(setToken(token));
};

export const getSessionId = (token) => async (dispatch) => {
  const sessionId = await authAPI.getSessionId(token);
  dispatch(setSessionId(sessionId));
};

export const setToken = (token) => ({
  type: GET_TOKEN,
  payload: token,
});

export const setSessionId = (id) => ({
  type: GET_SESSION_ID,
  payload: id,
});
