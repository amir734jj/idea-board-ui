import {
  LOGIN, LOGOUT, REFRESH, REGISTER, ACCOUNT,
} from '../constants';

const initialState = {
  name: null,
  email: null,
  expiration: null,
  fetching: false,
  error: null,
  loggedIn: false,
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case REFRESH.request:
    case ACCOUNT.request:
    case REGISTER.request:
    case LOGIN.request:
    case LOGOUT.request:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case REFRESH.failure:
    case ACCOUNT.failure:
    case REGISTER.failure:
    case LOGIN.failure:
    case LOGOUT.failure:
      return {
        ...state,
        fetching: true,
        error: [
          action.payload.message,
          action.payload.errors,
        ],
      };
    case REFRESH.success:
    case ACCOUNT.success:
    case LOGIN.success:
      return {
        ...state,
        ...action.payload,
        fetching: false,
        error: null,
        loggedIn: true,
      };
    case REGISTER.success:
    case LOGOUT.success:
      return initialState;
    default:
      return state;
  }
};
