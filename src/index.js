import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store'
import App from './App'
import './index.scss';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Provider store={store}>

    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

