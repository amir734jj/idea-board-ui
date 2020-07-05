export const buildActionNames = (type) => ({
  request: `${type}.REQUEST`,
  success: `${type}.SUCCESS`,
  failure: `${type}.FAILURE`,
});

// account
export const LOGIN = buildActionNames("LOGIN");
export const REGISTER = buildActionNames("REGISTER");

// idea
export const GET_IDEA = buildActionNames("GET_IDEA");
export const SAVE_IDEA = buildActionNames("SAVE_IDEA");
export const UPDATE_IDEA = buildActionNames("UPDATE_IDEA");

// board
export const GET_BOARD = buildActionNames("GET_BOARD");