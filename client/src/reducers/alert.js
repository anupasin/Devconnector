import {
  SET_ALERT,
  REMOVE_ALERT,
  USER_LOADED,
  AUTH_ERROR,
} from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
    case AUTH_ERROR:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
