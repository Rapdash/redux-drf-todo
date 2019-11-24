import React from "react";
import { IonApp } from "@ionic/react";
import { Provider } from "react-redux";

import { Router } from "../Router";

export const App = () => (
    <Provider>
        <IonApp>
            <Router/>
        </IonApp>
    </Provider>
)