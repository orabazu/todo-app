import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'views/App';
import './index.scss';
import { Provider } from 'react-redux';
import store from './store';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('output')
);
//disable es-lint
module.hot?.accept();
