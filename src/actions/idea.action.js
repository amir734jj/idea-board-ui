import { axios, createAsyncAction } from '../utilities';
import { GET_IDEA, SAVE_IDEA, UPDATE_IDEA } from '../constants';

export const getIdea = (id) => createAsyncAction(GET_IDEA, () => axios.get(`/idea/${id}`), id);

export const updateIdea = (id, idea) => createAsyncAction(UPDATE_IDEA, () => axios.put(`/idea/${id}`, idea), idea);

export const saveIdea = (idea) => createAsyncAction(SAVE_IDEA, () => axios.post('/idea', idea), idea);
