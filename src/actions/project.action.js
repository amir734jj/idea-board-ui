import { axios, createAsyncAction } from '../utilities';
import { GET_PROJECT, SAVE_PROJECT, UPDATE_PROJECT } from '../constants';

const prefix = '/project';

export const getProject = (id) => createAsyncAction(GET_PROJECT, () => axios.get(`${prefix}/${id}`), id);

export const getProjects = (id) => createAsyncAction(GET_PROJECT, () => axios.get(`${prefix}`), id);

export const updateProject = (id, idea) => createAsyncAction(UPDATE_PROJECT, () => axios.put(`${prefix}/${id}`, idea), idea);

export const saveProject = (idea) => createAsyncAction(SAVE_PROJECT, () => axios.post(`${prefix}/`, idea), idea);
