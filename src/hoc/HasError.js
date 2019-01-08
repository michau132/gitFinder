import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const ErrorHOC = Component => (props) => {
  const { restStore: { error } } = props;
  if (error) {
    return (
      <Typography variant="h5" color="error">
        Ups something goes wrong or user does not exist
      </Typography>
    );
  }
  return <Component {...props} />;
};

ErrorHOC.propTypes = {
  restStore: PropTypes.shape({
    error: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ErrorHOC;
