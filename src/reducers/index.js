import {combineReducers} from 'redux';
import {userReducer} from './user.reducer';
import {globalReducer} from "./global.reducer";
import {ideaReducer} from "./idea.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  idea: ideaReducer,
  global: globalReducer,
});