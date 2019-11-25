import {
  LOGIN_ATTEMPT,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP_ATTEMPT,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS
} from '../constants/authConstants';

import Axios from 'axios';

export const attemptLogin = (username, password) => (dispatch, getState) => {
  dispatch({ type: LOGIN_ATTEMPT });
  Axios.post(`${process.env.API_ROOT_ENDPOINT}/token`, { username, password })
    .then(res => {
      console.log(res.data);
      window.localStorage.setItem('auth_token', res.data.access);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token: res.data.access }
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: LOGIN_FAILURE, payload: { error } });
    });
};
