import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from 'app';
import appStore from 'reducers';

const store = createStore(appStore);

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('app'));
