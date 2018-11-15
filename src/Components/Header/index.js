import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';
import Button from '../Button';

const Header = ({
  onFormSubmit, inputValue, updateInputValue, errorInput,
}) => (
  <form
    onSubmit={onFormSubmit}
    className={styles.form}
  >
    <input
      type="text"
      className={classNames(styles.formInput, { [styles.errorInput]: errorInput })}
      onChange={updateInputValue}
      value={inputValue}
      placeholder="github login"
    />
    <Button type="submit" text="search" className={styles.formButton} />
  </form>
);

Header.defaultProps = {
  errorInput: null,
};

Header.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  updateInputValue: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  errorInput: PropTypes.bool,
};

export default Header;
