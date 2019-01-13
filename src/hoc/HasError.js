import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTypography = styled(Typography)`
  && {
    margin-top: 60px;
  }
`;

const HasError = Component => (props) => {
  const { error } = props;
  if (error) {
    return (
      <StyledTypography variant="h5" color="error">
        Ups something goes wrong or user does not exist
      </StyledTypography>
    );
  }
  return <Component {...props} />;
};

HasError.propTypes = {
  error: PropTypes.bool.isRequired,
};

export default HasError;
