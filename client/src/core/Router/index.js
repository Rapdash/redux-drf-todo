import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { ProtectedRoute } from './ProtectedRoute';
import { SignupPage, LoginPage, TodoListPage } from '../../pages';
import {
  TODOLIST_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  INDEX_ROUTE
} from '../../constants/routes';

export const Router = () => (
  <IonReactRouter>
    <IonRouterOutlet>
      <Route path={LOGIN_ROUTE} component={LoginPage} />
      <Route path={SIGNUP_ROUTE} component={SignupPage} />
      <ProtectedRoute path={TODOLIST_ROUTE} component={TodoListPage} />
      <Route
        path={INDEX_ROUTE}
        exact
        render={<Redirect to={TODOLIST_ROUTE} />}
      />
    </IonRouterOutlet>
  </IonReactRouter>
);
