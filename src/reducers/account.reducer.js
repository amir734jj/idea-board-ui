import { LOGIN, REGISTER } from '../constants';

const initialState = {
  name: null,
  email: null,
  token: null,
  expiration: null,
  fetching: false,
  error: null,
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER.request:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case REGISTER.failure:
      return {
        ...state,
        fetching: true,
        error: [
          action.payload.message,
          action.payload.errors,
        ],
      };
    case REGISTER.success:
      return {
        ...state,
        fetching: false,
        error: null,
      };
    case LOGIN.request:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case LOGIN.failure:
      return {
        ...state,
        fetching: true,
        error: [
          action.payload.message,
          action.payload.errors,
        ],
      };
    case LOGIN.success:
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
