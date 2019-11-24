import React from "react";
import { IonApp } from "@ionic/react";
import { Provider } from "react-redux";

import { Router } from "../Router";
import { store } from "../../redux";

export const App = () => (
    <Provider store={store}>
        <IonApp>
            <Router/>
        </IonApp>
    </Provider>
)