import { UPDATE_PROFILE, GET_PROFILE } from '../constants';

const initialState = {
  email: null,
  username: null,
  description: null,
  fetching: false,
  error: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE.request:
    case UPDATE_PROFILE.request:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case GET_PROFILE.failure:
    case UPDATE_PROFILE.failure:
      return {
        ...state,
        fetching: false,
        error: [
          action.payload.message,
          action.payload.errors,
        ],
      };
    case GET_PROFILE.success:
    case UPDATE_PROFILE.success:
      return {
        ...state,
        ...action.payload,
        fetching: false,
        error: null,
      };
    default:
      return state;
  }
};
