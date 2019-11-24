import React from "react";
import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet } from "@ionic/react"
import { Route } from "react-router-dom"

import { ProtectedRoute } from "./ProtectedRoute";
import { TODOLIST_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from "../../constants/routes";
import { SignupPage, LoginPage, TodoListPage } from "../../pages";

export const Router = () => (
    <IonReactRouter>
        <IonRouterOutlet>
            <Route path={LOGIN_ROUTE} component={LoginPage} />
            <Route path={SIGNUP_ROUTE} component={SignupPage} />
            <ProtectedRoute path={TODOLIST_ROUTE} component={TodoListPage} />
        </IonRouterOutlet>
    </IonReactRouter>
)