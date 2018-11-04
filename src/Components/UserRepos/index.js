import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import UserReposList from './UserReposList';
import Button from '../Button';

const UserRepos = ({
  userRepos,
  filterOnKeyUp,
  selectUserRepo,
  showAllRepos,
  allReposAreShown,
  openSelectedRepos,
  hideSelectedRepos,
  hideSingleRepo,
  selectedReposAreEmpty,
  openSingleRepo,
}) => (
  <div className={styles.userRepos}>
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
    <UserReposList
      userRepos={userRepos}
      selectUserRepo={selectUserRepo}
      hideSingleRepo={hideSingleRepo}
      openSingleRepo={openSingleRepo}
    />
  </div>
);

UserRepos.propTypes = {
  userRepos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      forks_count: PropTypes.number,
      stargazers_count: PropTypes.number,
      description: PropTypes.string,
      html_url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filterOnKeyUp: PropTypes.func.isRequired,
  selectUserRepo: PropTypes.func.isRequired,
  showAllRepos: PropTypes.func.isRequired,
  allReposAreShown: PropTypes.bool.isRequired,
  openSelectedRepos: PropTypes.func.isRequired,
  hideSelectedRepos: PropTypes.func.isRequired,
  hideSingleRepo: PropTypes.func.isRequired,
  openSingleRepo: PropTypes.func.isRequired,
  selectedReposAreEmpty: PropTypes.bool.isRequired,
};

export default UserRepos;
