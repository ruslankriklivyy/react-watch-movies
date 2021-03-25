import { authAPI } from '../../api/api';
import { initialState } from '../reducers/auth';
import { ThunkAction } from 'redux-thunk';

const GET_TOKEN = 'GET_TOKEN';
const GET_SESSION_ID = 'GET_SESSION_ID';
const SET_USER = 'SET_USER';

type Thunk = ThunkAction<Promise<void>, initialState, unknown, Actions>;

export const getToken = (): Thunk => async (dispatch) => {
  const token = await authAPI.getUserToken();
};

export const getUser = (username: string, password: string, token: string): Thunk => async (
  dispatch,
) => {
  const data = await authAPI.createSessionLogin(username, password, token);
  dispatch(setUsers(data.username, data.password));
};

// export const getSessionId = (token: string) => async (dispatch: Dispatch) => {
//   const sessionId = await authAPI.getSessionId(token);

//   dispatch(setSessionId(sessionId));
// };

type SetUsersType = {
  type: typeof SET_USER;
  username: string;
  password: string;
};

export const setUsers = (username: string, password: string): SetUsersType => ({
  type: SET_USER,
  username,
  password,
});

type SetTokenType = {
  type: typeof GET_TOKEN;
  payload: string;
};

export const setToken = (token: string): SetTokenType => ({
  type: GET_TOKEN,
  payload: token,
});

type SetSessionIdType = {
  type: typeof GET_SESSION_ID;
  payload: number;
};

// export const setSessionId = (id: string): SetSessionIdType => ({
//   type: GET_SESSION_ID,
//   payload: id,
// });

export type Actions = SetSessionIdType | SetTokenType | SetUsersType;
