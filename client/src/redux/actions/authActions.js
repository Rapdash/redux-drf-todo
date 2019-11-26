import Axios from 'axios';

import {
  LOGIN_ATTEMPT,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
  // TODO: Implement Signup routes for users on the backend.
  // SIGNUP_ATTEMPT,
  // SIGNUP_FAILURE,
  // SIGNUP_SUCCESS
} from '../constants/authConstants';

export const attemptLogin = (username, password) => (dispatch, getState) => {
  dispatch({ type: LOGIN_ATTEMPT });
  Axios.post(`https://fathomless-forest-63964.herokuapp.com/token/`, {
    username,
    password
  })
    .then(res => {
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
