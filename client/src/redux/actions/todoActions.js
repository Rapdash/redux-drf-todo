import {
  ADD_TODO_FAILURE,
  ADD_TODO_SUCCESS,
  // CHECK_OFF_FAILURE,
  // CHECK_OFF_SUCCESS,
  // DELETE_TODO_FAILURE,
  // DELETE_TODO_SUCCESS,
  GET_TODOS_FAILURE,
  GET_TODOS_SUCCESS,
  CHECK_OFF_SUCCESS,
  CHECK_OFF_FAILURE,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE
} from '../constants/todoConstants';

export const addTodo = (title, body, token) => (dispatch, getState) => {
  console.log(getState());
  fetch('http://localhost:8000', {
    method: 'POST',
    body: JSON.stringify({ body, title }),
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
    .then(res => {
      res.json().then(data => {
        dispatch({ type: ADD_TODO_SUCCESS, payload: { todo: data } });
      });
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

export const checkOffTodo = (todo, token) => (dispatch, getState) => {
  fetch(`http://localhost:8000/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify({ ...todo, checked_off: !todo.checked_off }),
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      res.json().then(data => {
        dispatch({ type: CHECK_OFF_SUCCESS, payload: { todo: data } });
      });
    })
    .catch(error => {
      dispatch({ type: CHECK_OFF_FAILURE, payload: { error } });
    });
};

export const deleteTodo = (todo, token) => (dispatch, getState) => {
  fetch(`http://localhost:8000/${todo.id}`, {
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + token }
  })
    .then(res => {
      dispatch({ type: DELETE_TODO_SUCCESS, payload: { id: todo.id } });
    })
    .catch(error => {
      dispatch({ type: DELETE_TODO_FAILURE, payload: { error } });
    });
};
