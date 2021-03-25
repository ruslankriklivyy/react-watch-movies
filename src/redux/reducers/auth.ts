import { SessionId, Token } from '../../types/types';
import { Actions } from '../actions/auth';

const initialState = {
  user: {
    username: null,
    password: null,
  },
  userId: null,
  token: null,
  sessionId: null,
};

export type initialState = {
  user: object;
  userId: null | number;
  token: null | Token;
  sessionId: null | SessionId;
};

const GET_TOKEN = 'GET_TOKEN';
const GET_SESSION_ID = 'GET_SESSION_ID';
const SET_USER = 'SET_USER';

const auth = (state = initialState, action: Actions): initialState => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case GET_SESSION_ID:
      return {
        ...state,
        sessionId: action.payload,
      };

    default:
      return state;
  }
};

export default auth;
