import { combineReducers } from 'redux';

import DatesReducer from './dates_reducer';
import UsersReducer from './users_reducer'

export default combineReducers({
  dates: DatesReducer,
  users: UsersReducer
});
