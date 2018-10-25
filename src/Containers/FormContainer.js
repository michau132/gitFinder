import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FormView from '../Components/Form/FormView';
import takeUserNameAndFetchData from '../actions/fetchData';


const FormContainer = ({ onFormSubmit, history }) => (
  <FormView
    onFormSubmit={onFormSubmit}
    historyPush={history.push}
  />
);

const mapDispatchToProps = dispatch => ({
  onFormSubmit: val => dispatch(takeUserNameAndFetchData(val)),
});

FormContainer.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(connect(null, mapDispatchToProps)(FormContainer));
