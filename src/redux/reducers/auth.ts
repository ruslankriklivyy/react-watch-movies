import { SessionId, Token } from '../../types/types';
import { Actions } from '../actions/auth';

const initialState = {
  userId: null as number | null,
  token: {} as Token,
  sessionId: {} as SessionId,
};

export type InitialState = typeof initialState;

const GET_TOKEN = 'GET_TOKEN';
const GET_SESSION_ID = 'GET_SESSION_ID';

const auth = (state = initialState, action: Actions): InitialState => {
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
