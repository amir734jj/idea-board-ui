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
export const GET_IDEA = buildActionNames('GET_IDEA');
export const SAVE_IDEA = buildActionNames('SAVE_IDEA');
export const UPDATE_IDEA = buildActionNames('UPDATE_IDEA');

// board
export const GET_BOARD = buildActionNames('GET_BOARD');

// profile
export const GET_PROFILE = buildActionNames('GET_PROFILE');
export const UPDATE_PROFILE = buildActionNames('UPDATE_PROFILE');

// category
export const GET_CATEGORIES = buildActionNames('GET_CATEGORIES');
