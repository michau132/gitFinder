import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './LoaderHOC.css';

const LoaderHOC = WrappedComponent => props => (
  props.user.isLoading
    ? <div className={styles.ldsHourglass} />
    : <WrappedComponent {...props} />
);

LoaderHOC.propTypes = {
  user: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
  }).isRequired,
}

export default LoaderHOC;
