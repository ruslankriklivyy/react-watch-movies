import { combineReducers } from 'redux';

import movies from './movies';
import filters from './filters';

const rootReducers = combineReducers({
  movies,
  filters,
});

export default rootReducers;
