import { combineReducers } from 'redux';

import movies from './movies';

const rootReducers = combineReducers({
  movies,
});

export default rootReducers;
