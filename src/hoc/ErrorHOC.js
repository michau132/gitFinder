/* eslint-disable react/prop-types */
import React from 'react';
import { Typography } from '@material-ui/core';

const ErrorHOC = Component => (props) => {
  const { user: { error } } = props;
  if (error) {
    return (
      <Typography variant="h5" color="error">
        Ups something goes wrong or user does not exist
      </Typography>
    );
  }
  return <Component {...props} />;
};

export default ErrorHOC;
