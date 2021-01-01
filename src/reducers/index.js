import { combineReducers } from 'redux';
import { accountReducer } from './account.reducer';
import { globalReducer } from './global.reducer';
import { projectReducer } from './project.reducer';
import { profileReducer } from './profile.reducer';
import { categoryReducer } from './category.reducer';

export const rootReducer = combineReducers({
  account: accountReducer,
  project: projectReducer,
  global: globalReducer,
  profile: profileReducer,
  category: categoryReducer,
});
