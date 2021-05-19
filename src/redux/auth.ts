import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authAPI } from '../api/api';
import { SessionId, Token } from '../interfaces/interfaces';

const initialState = {
  userId: null as number | null,
  token: {} as Token,
  sessionId: {} as SessionId,
};

export type InitialState = typeof initialState;

export const getToken = createAsyncThunk('auth/getTokenStatus', async (_, thunkApi) => {
  const token = await authAPI.getUserToken();
  thunkApi.dispatch(setToken(token));
});

export const getSessionId = createAsyncThunk(
  'auth/getSessionIdStatus',
  async (token: Token, thunkApi) => {
    const sessionId = await authAPI.getSessionId(token);
    thunkApi.dispatch(setSessionId(sessionId));
  },
);

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<Token>) {
      state.token = action.payload;
    },
    setSessionId(state, action: PayloadAction<SessionId>) {
      state.sessionId = action.payload;
    },
  },
});

export default auth.reducer;
export const { setToken, setSessionId } = auth.actions;
