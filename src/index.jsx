import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Components/Root.jsx';
import reducer from './reducers/index.jsx';
import {createStore} from 'redux';

const store = createStore(reducer);

ReactDOM.render(
    <Root store={store}/>
    , document.getElementById('root'))
