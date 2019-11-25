import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_ATTEMPT,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../constants/authConstants';

const initialState = {
  loading: false,
  token: null,
  error: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return Object.assign({}, { loading: true, token: null, error: null });
    case LOGIN_SUCCESS:
      return Object.assign(
        {},
        { loading: false, token: action.payload.token, error: null }
      );
    case LOGIN_FAILURE:
      return Object.assign(
        {},
        { loading: false, token: null, error: action.payload.error }
      );
    case SIGNUP_ATTEMPT:
      return Object.assign({}, { loading: true, token: null, error: null });
    case SIGNUP_SUCCESS:
      return Object.assign(
        {},
        { loading: false, token: action.payload.token, error: null }
      );
    case SIGNUP_FAILURE:
      return Object.assign({}, { loading: false, token: null, error: null });
    default:
      return state;
  }
};
