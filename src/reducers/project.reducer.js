import {
  GET_PROJECT, GET_PROJECTS, SAVE_PROJECT, UPDATE_PROJECT,
} from '../constants';
import { byId, pushById, pushIfNotExists } from '../utilities';

const initialState = {
  byId: {},
  allIds: [],
  error: false,
  loading: false,
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT.request:
    case GET_PROJECTS.request:
    case UPDATE_PROJECT.request:
    case SAVE_PROJECT.request:
      return {
        ...state,
        loading: true,
      };
    case GET_PROJECT.failure:
    case GET_PROJECTS.failure:
    case UPDATE_PROJECT.failure:
    case SAVE_PROJECT.failure:
      return {
        ...state,
        error: [
          action.payload.message,
          action.payload.errors,
        ],
        loading: false,
      };
    case GET_PROJECT.success:
    case UPDATE_PROJECT.success:
    case SAVE_PROJECT.success:
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
    case GET_PROJECTS.success:
      return {
        ...state,
        byId: byId(state.byId, (x) => x.id),
        allIds: pushById(state.allIds, action.payload, (x) => x.id),
        error: false,
        loading: false,
      };
    default:
      return state;
  }
};
