
import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import Button from '../../Button';

const UserReposHeader = ({
  setReposOnKeyUp,
  openSelectedRepos,
  hideSelectedRepos,
  showAllRepos,
  selectAllRepos,
  allReposAreShown,
  selectedReposAreEmpty,
  filterProjectsInput,
  allReposAreSelected,
}) => (
  <div className={styles.filterForm}>
    <div className={styles.checkAll}>
      <span>Select all</span>
      <input type="checkbox" onChange={selectAllRepos} checked={allReposAreSelected} />
    </div>
    <form className={styles.form}>
      <input className={styles.formText} value={filterProjectsInput} type="text" placeholder="filter projects" onChange={e => setReposOnKeyUp(e.target.value)} />
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
  setReposOnKeyUp: PropTypes.func.isRequired,
  showAllRepos: PropTypes.func.isRequired,
  allReposAreShown: PropTypes.bool.isRequired,
  selectedReposAreEmpty: PropTypes.bool.isRequired,
  filterProjectsInput: PropTypes.string.isRequired,
  allReposAreSelected: PropTypes.bool.isRequired,
  openSelectedRepos: PropTypes.func.isRequired,
  hideSelectedRepos: PropTypes.func.isRequired,
  selectAllRepos: PropTypes.func.isRequired,
};

export default UserReposHeader;
