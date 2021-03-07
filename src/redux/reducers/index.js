import { combineReducers } from 'redux';

import movies from './movies';
import filters from './filters';
import auth from './auth';

const rootReducers = combineReducers({
  movies,
  filters,
  auth,
});

export default rootReducers;
