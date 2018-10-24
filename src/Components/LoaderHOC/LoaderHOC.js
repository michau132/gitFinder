import React from 'react';
import * as styles from './LoaderHOC.css';

const LoaderHOC = WrappedComponent => props => (
  props.user.isLoading
    ?       <div className={styles.ldsHourglass} />
    : <WrappedComponent {...props} />
);


export default LoaderHOC;
