import React, {PropTypes} from 'react';
import { Provider } from 'react-redux';
import {HashRouter} from 'react-router-dom';
import App from './App/App.jsx';
import {hashHistory} from "react-router";
import './Root.css';


const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter history={hashHistory}>
            <section className='container'>
                <App/>
            </section>
        </HashRouter>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root