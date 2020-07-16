import { GET_CATEGORIES } from '../constants';

const initialState = {
  categories: [],
  fetching: false,
  error: null,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES.request:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case GET_CATEGORIES.failure:
      return {
        ...state,
        fetching: false,
        error: [
          action.payload.message,
          action.payload.errors,
        ],
      };
    case GET_CATEGORIES.success:
      return {
        ...state,
        categories: action.payload,
        fetching: false,
        error: null,
      };
    default:
      return state;
  }
};
