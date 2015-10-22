import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from 'app';
import reducer from 'reducers';

const store = applyMiddleware(thunk)(createStore)(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('app'));
