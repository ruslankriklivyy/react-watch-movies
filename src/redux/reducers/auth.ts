const initialState = {
  user: {
    username: null,
    password: null,
  },
  userId: null,
  token: null,
  sessionId: null,
};

type initialStateType = {
  user: object;
  userId: null | number;
  token: null | string;
  sessionId: null | string;
};

const GET_TOKEN = 'GET_TOKEN';
const GET_SESSION_ID = 'GET_SESSION_ID';
const SET_USER = 'SET_USER';

const auth = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case SET_USER:
      return {
        ...state,
        user: {
          username: action.username,
          password: action.password,
        },
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
