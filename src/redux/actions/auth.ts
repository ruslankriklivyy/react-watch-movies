import { authAPI } from '../../api/api';
import { initialState } from '../reducers/auth';
import { ThunkAction } from 'redux-thunk';
import { SessionId, Token } from '../../types/types';

const GET_TOKEN = 'GET_TOKEN';
const GET_SESSION_ID = 'GET_SESSION_ID';

type Thunk = ThunkAction<Promise<void>, initialState, unknown, Actions>;

export const getToken = (): Thunk => async (dispatch) => {
  const token = await authAPI.getUserToken();
  dispatch(setToken(token));
};

export const getSessionId = (token: Token): Thunk => async (dispatch) => {
  const sessionId = await authAPI.getSessionId(token);

  dispatch(setSessionId(sessionId));
};

type SetTokenType = {
  type: typeof GET_TOKEN;
  payload: Token;
};

export const setToken = (token: Token): SetTokenType => ({
  type: GET_TOKEN,
  payload: token,
});

type SetSessionIdType = {
  type: typeof GET_SESSION_ID;
  payload: SessionId;
};

export const setSessionId = (sessionId: SessionId): SetSessionIdType => ({
  type: GET_SESSION_ID,
  payload: sessionId,
});

export type Actions = SetSessionIdType | SetTokenType;
