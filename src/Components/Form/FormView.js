import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const FormView = ({ onFormSubmit, historyPush }) => {
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
      <h1 className={styles.formTitle}>GitFinder</h1>
      <input type="text" className={styles.formInput} ref={node => input = node} />
      <button type="submit" className={styles.formButton}>Search</button>
    </form>
  );
};

FormView.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  historyPush: PropTypes.func.isRequired,
};

export default FormView;
