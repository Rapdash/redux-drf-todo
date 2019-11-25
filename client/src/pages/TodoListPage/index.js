import React, { useEffect, useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/react';
import { connect } from 'react-redux';
import { getTodos, addTodo } from '../../redux/actions/todoActions';

const TodoListPageBase = ({ doGetTodos, doAddTodo, token, list, error }) => {
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoBody, setNewTodoBody] = useState('');
  useEffect(() => {
    doGetTodos(token);
  }, [token, doGetTodos]);

  const onTodoSubmit = e => {
    e.preventDefault();
    doAddTodo(newTodoTitle, newTodoBody, token);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonTitle className='ion-text-center'>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle className='ion-text-center'>Add Todo:</IonCardTitle>
          </IonCardHeader>
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
                    onChange={e => setNewTodoTitle(e.target.value)}
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
              <IonButton>Submit</IonButton>
            </form>
          </IonCardContent>
        </IonCard>
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
  doAddTodo: (title, body, token) => dispatch(addTodo(title, body, token))
});

export const TodoListPage = connect(mapState, mapDispatch)(TodoListPageBase);
