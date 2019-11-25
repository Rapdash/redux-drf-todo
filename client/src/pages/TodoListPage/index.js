import React from 'react';
import { IonPage } from '@ionic/react';
import { connect } from 'react-redux';
import { getTodos, addTodo } from '../../redux/actions/todoActions';

const TodoListPageBase = () => {
  return <IonPage></IonPage>;
};

const mapState = state => ({
  list: state.todos.list,
  error: state.todos.error
});

const mapDispatch = dispatch => ({
  doGetTodos: token => dispatch(getTodos()),
  doAddTodo: (title, body, token) => dispatch(addTodo(title, body, token))
});

export const TodoListPage = connect(mapState, mapDispatch)(TodoListPageBase);
