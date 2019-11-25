import Axios from 'axios';

import {
  ADD_TODO_FAILURE,
  ADD_TODO_SUCCESS,
  // CHECK_OFF_FAILURE,
  // CHECK_OFF_SUCCESS,
  // DELETE_TODO_FAILURE,
  // DELETE_TODO_SUCCESS,
  GET_TODOS_FAILURE,
  GET_TODOS_SUCCESS
} from '../constants/todoConstants';

export const addTodo = (title, body, token) => (dispatch, getState) => {
  console.log(getState());
  Axios.post(
    'http://localhost:8000/',
    { title, body },
    { headers: { Authorization: 'Token ' + token } }
  )
    .then(res => {
      dispatch({ type: ADD_TODO_SUCCESS, payload: { todo: res.data } });
    })
    .catch(error => {
      dispatch({ type: ADD_TODO_FAILURE, payload: { error } });
    });
};

export const getTodos = token => (dispatch, getState) => {
  fetch('http://localhost:8000', {
    headers: { Authorization: 'Bearer ' + token }
  })
    .then(res => {
      res.json().then(data => {
        dispatch({ type: GET_TODOS_SUCCESS, payload: { todos: data } });
      });
    })
    .catch(error => {
      dispatch({ type: GET_TODOS_FAILURE, payload: { error } });
    });
};
