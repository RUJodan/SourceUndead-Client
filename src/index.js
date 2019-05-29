import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './Router';
import Store from './store';

import './index.scss';

ReactDOM.render(
  <Provider store={Store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root'),
);
