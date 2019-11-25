import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonInput,
  IonLabel,
  IonButton
} from '@ionic/react';

import { attemptLogin } from '../../redux/actions/authActions';
import { TODOLIST_ROUTE } from '../../constants/routes';

const LoginPageBase = ({ token, error, doAttemptLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (token) return <Redirect to={TODOLIST_ROUTE} />;

  const logIn = e => {
    e.preventDefault();
    doAttemptLogin(username, password);
    setUsername('');
    setPassword('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonButtons>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle class='ion-text-center'>Login</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form onSubmit={e => logIn(e)}>
              <IonList>
                <IonItem>
                  <IonLabel position='floating' color='primary'>
                    Username
                  </IonLabel>
                  <IonInput
                    type='text'
                    value={username}
                    onInput={e => setUsername(e.target.value)}
                  />
                </IonItem>
                <IonItem>
                  <IonLabel position='floating' color='primary'>
                    Password
                  </IonLabel>
                  <IonInput
                    type='password'
                    value={password}
                    onInput={e => setPassword(e.target.value)}
                  />
                </IonItem>
                {error && <IonItem color='danger'>{error.message}</IonItem>}
                <IonButton expand='block' color='primary' type='submit'>
                  Log In
                </IonButton>
              </IonList>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

// TODO: Wire Up Redux
const mapState = state => ({
  error: state.auth.error,
  token: state.auth.token
});
const mapDispatch = dispatch => ({
  doAttemptLogin: (username, password) =>
    dispatch(attemptLogin(username, password))
});

export const LoginPage = connect(mapState, mapDispatch)(LoginPageBase);
