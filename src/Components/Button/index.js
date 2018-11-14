/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';

const Button = ({
  type, className, onClick, text, disabled,
}) => (
  <button
    disabled={disabled}
    type={type}
    className={classNames(className, styles.button, { [styles.disabledBtn]: disabled })}
    onClick={onClick}
  >
    {text}
  </button>
);

Button.defaultProps = {
  className: null,
  onClick: null,
  disabled: false,
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
