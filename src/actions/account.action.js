import store from 'store';

import { createAsyncAction, axios } from '../utilities';
import { LOGIN, LOGOUT, REGISTER } from '../constants';

export const login = (user) => createAsyncAction(LOGIN, () => axios.post('/account/login', user)
  .then((response) => {
    const { data } = response;
    store.set('token', data.token);

    return data;
  }), user);

export const register = (user) => createAsyncAction(REGISTER, () => axios.post('/account/register', user)
  .then((response) => response.data), user);

export const logout = () => createAsyncAction(LOGOUT, () => axios.post('/account/logout')
  .then((response) => {
    const { data } = response;
    store.remove('token');

    return data;
  }), null);
