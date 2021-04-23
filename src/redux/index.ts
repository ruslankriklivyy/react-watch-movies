import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filtersSlice from './filters';
import moviesSlice from './movies';
import authSlice from './auth';

export const rootReducer = combineReducers({
  filters: filtersSlice,
  movies: moviesSlice,
  auth: authSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
