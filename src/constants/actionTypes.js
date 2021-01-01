export const buildActionNames = (type) => ({
  request: `${type}.REQUEST`,
  success: `${type}.SUCCESS`,
  failure: `${type}.FAILURE`,
});

// account
export const LOGIN = buildActionNames('LOGIN');
export const REGISTER = buildActionNames('REGISTER');
export const LOGOUT = buildActionNames('LOGOUT');
export const ACCOUNT = buildActionNames('ACCOUNT');
export const REFRESH = buildActionNames('REFRESH');

// project
export const GET_PROJECT = buildActionNames('GET_PROJECT');
export const GET_PROJECTS = buildActionNames('GET_PROJECTS');
export const SAVE_PROJECT = buildActionNames('SAVE_PROJECT');
export const UPDATE_PROJECT = buildActionNames('UPDATE_PROJECT');

// board
export const GET_BOARD = buildActionNames('GET_BOARD');

// profile
export const GET_PROFILE = buildActionNames('GET_PROFILE');
export const UPDATE_PROFILE = buildActionNames('UPDATE_PROFILE');

// category
export const GET_CATEGORIES = buildActionNames('GET_CATEGORIES');
