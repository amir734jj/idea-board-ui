import { createAsyncAction, axios } from "../utilities";
import { LOGIN, REGISTER } from "../constants";

export const login = (user) =>
  createAsyncAction(LOGIN, () => axios.post("/account/login", user), user);

export const register = (user) =>
  createAsyncAction(REGISTER, () => axios.post("/account/register", user), user);
