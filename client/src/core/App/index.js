import React from "react";
import { Provider } from "react-redux";

import { Router } from "../Router";

export const App = () => (
    <Provider>
        <Router/>
    </Provider>
)