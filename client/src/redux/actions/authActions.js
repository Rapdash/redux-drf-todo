import Axios from 'axios';

import {
  LOGIN_ATTEMPT,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP_ATTEMPT,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS
} from '../constants/authConstants';

export const attemptLogin = (username, password) => (dispatch, getState) => {
  console.log('test');
  dispatch({ type: LOGIN_ATTEMPT });
  Axios.post(`http://localhost:8000/token/`, { username, password })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token: res.data.access }
      });
    })
    .catch(error => {
      console.log(error.message);
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error }
      });
    });
};
