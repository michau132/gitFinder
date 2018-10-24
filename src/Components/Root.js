import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App/App';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

const Root = () => (
  <Provider store={store}>
    <Route>
      <App />
    </Route>
  </Provider>
);

export default Root;
