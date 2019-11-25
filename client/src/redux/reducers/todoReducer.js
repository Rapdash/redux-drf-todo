import {
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  CHECK_OFF_SUCCESS,
  CHECK_OFF_FAILURE
} from '../constants/todoConstants';

const initialState = {
  list: [],
  error: null
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return Object.assign({}, { error: null, list: action.payload.todos });

    case GET_TODOS_FAILURE:
      return Object.assign({}, { error: action.payload.error, list: [] });

    case ADD_TODO_SUCCESS:
      return Object.assign(
        {},
        { error: null, list: [...state.list, action.payload.todo] }
      );

    case ADD_TODO_FAILURE:
      return Object.assign({}, { ...state, error: action.payload.error });

    case DELETE_TODO_SUCCESS:
      const postDeleteList = state.list.filter(
        todo => todo.id !== action.payload.id
      );
      return Object.assign({}, { error: null, list: postDeleteList });

    case DELETE_TODO_FAILURE:
      return Object.assign({}, { ...state, error: action.payload.error });

    case CHECK_OFF_SUCCESS:
      const postCheckOffList = state.list.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, checked_off: !todo.checked_off };
        }
        return todo;
      });
      return Object.assign({}, { error: null, list: postCheckOffList });

    case CHECK_OFF_FAILURE:
      return Object.assign({}, { ...state, error: action.payload.error });

    default:
      return state;
  }
};
