import React, { useEffect, useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText
} from '@ionic/react';
import { connect } from 'react-redux';

import {
  getTodos,
  addTodo,
  deleteTodo,
  checkOffTodo
} from '../../redux/actions/todoActions';
import { TodoCard } from './TodoCard';

const renderTodoCards = (list, deleteTodo, checkOffTodo) => {
  return list.map(todo => (
    <TodoCard
      deleteTodo={deleteTodo}
      checkOffTodo={checkOffTodo}
      key={todo.id}
      todo={todo}
    />
  ));
};

const TodoListPageBase = ({
  doGetTodos,
  doAddTodo,
  doDeleteTodo,
  doCheckOffTodo,
  token,
  list,
  error
}) => {
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoBody, setNewTodoBody] = useState('');
  useEffect(() => {
    doGetTodos(token);
  }, [token, doGetTodos]);

  const onTodoSubmit = e => {
    e.preventDefault();
    doAddTodo(newTodoTitle, newTodoBody, token);
    setNewTodoBody('');
    setNewTodoTitle('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonTitle className='ion-text-center'>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {error && (
          <IonCard>
            <IonCardContent>
              <IonText color='danger'>{error}</IonText>
            </IonCardContent>
          </IonCard>
        )}
        <IonCard>
          <IonCardContent className='ion-text-center'>
            <form onSubmit={e => onTodoSubmit(e)}>
              <IonList>
                <IonItem>
                  <IonLabel position='floating' color='primary'>
                    Title
                  </IonLabel>
                  <IonInput
                    type='text'
                    value={newTodoTitle}
                    onInput={e => setNewTodoTitle(e.target.value)}
                  />
                </IonItem>
                <IonItem>
                  <IonLabel position='floating' color='primary'>
                    Body
                  </IonLabel>
                  <IonInput
                    type='text'
                    value={newTodoBody}
                    onInput={e => setNewTodoBody(e.target.value)}
                  />
                </IonItem>
              </IonList>
              <IonButton type='submit'>Add Todo</IonButton>
            </form>
          </IonCardContent>
        </IonCard>
        {renderTodoCards(list, doDeleteTodo, doCheckOffTodo)}
      </IonContent>
    </IonPage>
  );
};

const mapState = state => ({
  token: state.auth.token,
  list: state.todo.list,
  error: state.todo.error
});

const mapDispatch = dispatch => ({
  doGetTodos: token => dispatch(getTodos(token)),
  doAddTodo: (title, body, token) => dispatch(addTodo(title, body, token)),
  doCheckOffTodo: (todo, token) => dispatch(checkOffTodo(todo, token)),
  doDeleteTodo: (todo, token) => dispatch(deleteTodo(todo, token))
});

export const TodoListPage = connect(mapState, mapDispatch)(TodoListPageBase);
