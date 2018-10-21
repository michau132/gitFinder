import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import Root from './Components/Root';
import reducer from './reducers/index';

const store = createStore(reducer);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'),
);
