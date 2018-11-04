import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import Button from '../Button';

const Header = ({ onFormSubmit, historyPush }) => {
  let input;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit(input.value);
        historyPush(`/${input.value}`);
      }}
      className={styles.form}
    >
      <input type="text" className={styles.formInput} ref={node => input = node} placeholder="github login" />
      <Button type="submit" text="search" className={styles.formButton} />
    </form>
  );
};

Header.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  historyPush: PropTypes.func.isRequired,
};

export default Header;
