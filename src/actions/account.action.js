import { createAsyncAction, axios } from '../utilities';
import {
  ACCOUNT, LOGIN, LOGOUT, REFRESH, REGISTER,
} from '../constants';

export const login = (user) => createAsyncAction(LOGIN, () => axios.post('/account/login', user));

export const register = (user) => createAsyncAction(REGISTER, () => axios.post('/account/register', user));

export const logout = () => createAsyncAction(LOGOUT, () => axios.post('/account/logout', { }));

export const accountInfo = () => createAsyncAction(ACCOUNT, () => axios.get('/account'));

export const refreshToken = () => createAsyncAction(REFRESH, () => axios.get('/account/refresh'));
