import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const ldsHourglass = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const WithLoadingStyles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 192px;
  height: 192px;
  
  ::after {
    content: " ";
  display: block;
  width: 136px;
  height: 136px;
  margin: 1px;
  border-radius: 50%;
  border: 5px solid rgb(70, 42, 42);
  border-color: rgb(70, 42, 42) transparent rgb(70, 42, 42) transparent;
  animation: ${ldsHourglass} 1.2s linear infinite;
  }
`;

const Loading = WrappedComponent => (props) => {
  const { isLoading } = props;
  if (isLoading) {
    return <WithLoadingStyles />;
  }
  return <WrappedComponent {...props} />;
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};


export default Loading;
