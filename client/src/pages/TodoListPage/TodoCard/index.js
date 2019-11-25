import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/react';

export const TodoCard = ({ todo, checkOffTodo, deleteTodo, token }) => (
  <IonCard>
    <IonCardHeader color={todo.checked_off ? 'success' : 'danger'}>
      <IonCardTitle className='ion-text-center'>{todo.title}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent className='ion-text-center'>
      <p>{todo.body}</p>
      <IonButton color='primary' onClick={() => checkOffTodo(todo, token)}>
        {todo.checked_off ? 'Completed' : 'Not Completed'}
      </IonButton>
      <IonButton color='danger' onClick={() => deleteTodo(todo, token)}>
        Delete Todo
      </IonButton>
    </IonCardContent>
  </IonCard>
);
