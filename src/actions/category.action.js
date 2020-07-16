import { axios, createAsyncAction } from '../utilities';
import { GET_CATEGORIES } from '../constants';

export const getCategories = () => createAsyncAction(GET_CATEGORIES, () => axios.get('/category')
  .then(({ data }) => data));
