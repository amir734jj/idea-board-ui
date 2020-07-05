import {combineReducers} from 'redux';
import {userReducer} from './user.reducer';
import {globalReducer} from "./global.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  global: globalReducer,
});