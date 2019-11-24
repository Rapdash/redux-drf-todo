import React from "react";
import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet } from "@ionic/react"
import { Route } from "react-router-dom"

export const Router = () => (
    <IonReactRouter>
        <IonRouterOutlet>
            <Route path="/" component={<div />} />
        </IonRouterOutlet>
    </IonReactRouter>
)