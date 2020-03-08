import { combineReducers } from 'redux';

import DateReducer from './dates_reducer';


export default combineReducers({
  dates: DateReducer,
  
});
