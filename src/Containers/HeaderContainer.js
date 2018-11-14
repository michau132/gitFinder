import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from '../Components/Header';
import takeUserNameAndFetchData from '../actions/fetchData';

const HeaderContainer = ({ onFormSubmit, history }) => (
  <Header
    onFormSubmit={onFormSubmit}
    historyPush={history.push}
  />
);

const mapDispatchToProps = dispatch => ({
  onFormSubmit: val => dispatch(takeUserNameAndFetchData(val)),
});

HeaderContainer.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(connect(null, mapDispatchToProps)(HeaderContainer));
