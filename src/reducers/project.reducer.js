import { GET_PROJECT } from '../constants';

const initialState = {
  byId: {},
  allIds: [],
  error: false,
  loading: false,
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT.request:
      return {
        ...state,
        loading: true,
      };
    case GET_PROJECT.failure:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case GET_PROJECT.success:
      return {
        ...state,
        error: false,
        loading: false,
      };
    default:
      return state;
  }
};
