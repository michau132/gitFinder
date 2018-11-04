/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';

const Button = ({
  type, className, onClick, text, disabled,
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    disabled={disabled}
    type={type}
    className={classNames(className, styles.button, { [styles.disabledBtn]: disabled })}
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
