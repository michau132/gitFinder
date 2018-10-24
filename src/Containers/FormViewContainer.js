import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FormView from '../Components/Form/FormView';
import takeUserNameAndFetchData from '../actions/fetchData';


const FormViewContainer = ({onFormSubmit, history }) => {
  
  return <FormView onFormSubmit={onFormSubmit} historyPush={history.push} />
};

const mapDispatchToProps = dispatch => ({
  onFormSubmit: val => dispatch(takeUserNameAndFetchData(val)),
});

FormViewContainer.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default withRouter(connect(null, mapDispatchToProps)(FormViewContainer));
