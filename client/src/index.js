import React from 'react';
import ReactDOM from 'react-dom';
import "@ionic/react/css/ionic.bundle.css";

import { App } from './core/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
