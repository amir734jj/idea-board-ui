import { createAsyncAction, axios } from '../utilities';
import {
  ACCOUNT, LOGIN, LOGOUT, REFRESH, REGISTER,
} from '../constants';

export const login = (user) => createAsyncAction(LOGIN, () => axios.post('/account/login', user)
  .then(({ data }) => data), user);

export const register = (user) => createAsyncAction(REGISTER, () => axios.post('/account/register', user)
  .then((response) => response.data), user);

export const logout = () => createAsyncAction(LOGOUT, () => axios.post('/account/logout', { })
  .then(({ data }) => data), null);

export const accountInfo = () => createAsyncAction(ACCOUNT, () => axios.get('/account')
  .then(({ data }) => data));

export const refreshToken = () => createAsyncAction(REFRESH, () => axios.get('/account/refresh')
  .then(({ data }) => data));
