import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import Button from '../../Button';

const UserReposHeader = ({
  filterOnKeyUp,
  openSelectedRepos,
  selectedReposAreEmpty,
  hideSelectedRepos,
  showAllRepos,
  allReposAreShown,
}) => (
  <div className={styles.filterForm}>
    <span className={styles.square} />
    <form className={styles.form}>
      <input className={styles.formText} type="text" placeholder="filter projects" onKeyUp={filterOnKeyUp} />
      <Button
        type="button"
        onClick={openSelectedRepos}
        disabled={selectedReposAreEmpty}
        text="open"
      />
      <Button
        type="button"
        onClick={hideSelectedRepos}
        disabled={selectedReposAreEmpty}
        text="hide"
      />
      <Button
        type="button"
        onClick={showAllRepos}
        disabled={allReposAreShown}
        text="show all"
      />
    </form>
  </div>
);

UserReposHeader.propTypes = {
  filterOnKeyUp: PropTypes.func.isRequired,
  showAllRepos: PropTypes.func.isRequired,
  allReposAreShown: PropTypes.bool.isRequired,
  openSelectedRepos: PropTypes.func.isRequired,
  hideSelectedRepos: PropTypes.func.isRequired,
  selectedReposAreEmpty: PropTypes.bool.isRequired,
};

export default UserReposHeader;
