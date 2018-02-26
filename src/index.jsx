import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers/index.jsx';
import {createStore} from 'redux';
import Root from './Components/Root.jsx';


const store = createStore(reducer);

ReactDOM.render(
    <Root store={store}/>
    , document.getElementById('root'))
