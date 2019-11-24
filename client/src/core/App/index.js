import React from "react";
import { Provider } from "react-redux";
import { IonApp } from "@ionic/react";

import { Router } from "../Router";

export const App = () => (
    <Provider>
        <IonApp>
            <Router/>
        </IonApp>
    </Provider>
)