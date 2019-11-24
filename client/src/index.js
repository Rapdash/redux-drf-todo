// Abs
import React from 'react';
import ReactDOM from 'react-dom';
// Rel
import * as serviceWorker from './serviceWorker';
// CSS
import "@ionic/react/css/ionic.bundle.css";

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
