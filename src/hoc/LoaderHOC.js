import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './LoaderHOC.css';

const LoaderHOC = WrappedComponent => (props) => {
  if (props.user.isLoading) {
    return (<div className={styles.ldsHourglass} />);
  }
  return (<WrappedComponent {...props} />);
};

LoaderHOC.propTypes = {
  user: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
  }).isRequired,
};

export default LoaderHOC;
