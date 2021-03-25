import { authAPI } from '../../api/api';
import { Dispatch } from 'redux';

const GET_TOKEN = 'GET_TOKEN';
const GET_SESSION_ID = 'GET_SESSION_ID';
const SET_USER = 'SET_USER';

export const getToken = () => async (dispatch: Dispatch) => {
  const token = await authAPI.getUserToken();
};

export const getUser = (username: string, password: string, token: string) => async (
  dispatch: Dispatch,
) => {
  const data = await authAPI.createSessionLogin(username, password, token);
  dispatch(setUsers(data.username, data.password));
};

// export const getSessionId = (token: string) => async (dispatch: Dispatch) => {
//   const sessionId = await authAPI.getSessionId(token);

//   dispatch(setSessionId(sessionId));
// };

type setUsersType = {
  type: typeof SET_USER;
  username: string;
  password: string;
};

export const setUsers = (username: string, password: string): setUsersType => ({
  type: SET_USER,
  username,
  password,
});

type setTokenType = {
  type: typeof GET_TOKEN;
  payload: string;
};

export const setToken = (token: string): setTokenType => ({
  type: GET_TOKEN,
  payload: token,
});

type setSessionIdType = {
  type: typeof GET_SESSION_ID;
  payload: number;
};

export const setSessionId = (id: number): setSessionIdType => ({
  type: GET_SESSION_ID,
  payload: id,
});
