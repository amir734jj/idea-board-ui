import { combineReducers } from 'redux';
import { accountReducer } from './account.reducer';
import { globalReducer } from './global.reducer';
import { ideaReducer } from './idea.reducer';

export const rootReducer = combineReducers({
  account: accountReducer,
  idea: ideaReducer,
  global: globalReducer,
});
