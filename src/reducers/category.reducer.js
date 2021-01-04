import { GET_CATEGORIES, SAVE_CATEGORIES } from '../constants';
import { byId, pushIfNotExists } from '../utilities';

const initialState = {
  byId: {},
  allIds: [],
  fetching: false,
  error: null,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES.request:
    case SAVE_CATEGORIES.request:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case GET_CATEGORIES.failure:
    case SAVE_CATEGORIES.failure:
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
        byId: byId(action.payload, (x) => x.id),
        allIds: action.payload.map(({ id }) => id),
        error: false,
        loading: false,
      };
    case SAVE_CATEGORIES.success:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
        allIds: pushIfNotExists(state.allIds, action.payload.id),
        error: false,
        loading: false,
      };
    default:
      return state;
  }
};
