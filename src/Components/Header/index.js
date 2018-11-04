import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

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
      <button type="submit" className={styles.formButton}>Search</button>
    </form>
  );
};

Header.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  historyPush: PropTypes.func.isRequired,
};

export default Header;
