import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './Router';
import configureStore from './store';

import './index.scss';

ReactDOM.render(
  <Provider store={configureStore()}>
    <AppRouter />
  </Provider>,
  document.getElementById('root'),
);
