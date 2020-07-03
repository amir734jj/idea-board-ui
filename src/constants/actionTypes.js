export const buildActionNames = (type) => ({
  REQUEST: `${type}.REQUEST`,
  SUCCESS: `${type}.SUCCESS`,
  FAILURE: `${type}.FAILURE`,
});

export const LOGIN = buildActionNames("login");

export const REGISTER = buildActionNames("register");
