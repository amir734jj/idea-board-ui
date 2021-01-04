import { createAsyncAction, axios } from '../utilities';
import {
  GET_PROFILE,
  UPDATE_PROFILE,
} from '../constants';

export const getProfile = () => createAsyncAction(GET_PROFILE, () => axios.get('/profile'));

export const updateProfile = (profile) => createAsyncAction(UPDATE_PROFILE, () => axios.post('/profile', profile));
