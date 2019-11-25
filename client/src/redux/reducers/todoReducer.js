import {
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE
} from '../constants/todoConstants';

const initialState = {
  list: [],
  error: null
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return Object.assign({}, { error: null, list: action.payload.list });
    case GET_TODOS_FAILURE:
      return Object.assign({}, { error: action.payload.error, list: [] });
    case ADD_TODO_SUCCESS:
      return Object.assign(
        {},
        { error: null, list: [...state.list, action.payload.todo] }
      );
    case ADD_TODO_FAILURE:
      return Object.assign(
        {},
        { error: action.payload.error, list: state.list }
      );
    default:
      return state;
  }
};
