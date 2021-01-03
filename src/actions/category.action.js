import { axios, createAsyncAction } from '../utilities';
import { GET_CATEGORIES, SAVE_CATEGORIES } from '../constants';

export const getCategories = () => createAsyncAction(GET_CATEGORIES, () => axios.get('/category'));

export const saveCategory = (category) => createAsyncAction(SAVE_CATEGORIES, () => axios.post('/category', category));
