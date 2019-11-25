import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/react';

export const TodoCard = ({ todo }) => (
  <IonCard>
    <IonCardHeader>
      <IonCardTitle className='ion-text-center'>{todo.title}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      <p className='ion-text-center'>{todo.body}</p>
    </IonCardContent>
  </IonCard>
);
