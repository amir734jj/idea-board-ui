export const buildActionNames = (type) => ({
  request: `${type}.REQUEST`,
  success: `${type}.SUCCESS`,
  failure: `${type}.FAILURE`,
});

export const LOGIN = buildActionNames("login");

export const REGISTER = buildActionNames("register");
