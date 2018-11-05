import { combineReducers } from 'redux';

import user from './user';
import filterRepos from './filterRepos';

const rootReducer = combineReducers({
  user,
  filterRepos,
});

export default rootReducer;
