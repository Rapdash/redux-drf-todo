import React from "react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Switch } from "react-router-dom"

export const Router = () => (
    <IonReactRouter>
        <Switch>
            <Route path="/" component={<div />} />
        </Switch>
    </IonReactRouter>
)