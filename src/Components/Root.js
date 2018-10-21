import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { hashHistory } from 'react-router';
import App from './App/App';
import './Root.css';


const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter history={hashHistory}>
      <section className="container">
        <App />
      </section>
    </HashRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
