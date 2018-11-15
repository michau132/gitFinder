import React from 'react';
import PropTypes from 'prop-types';
import UserReposList from './UserReposList';
import UserReposHeader from './UserReposHeader';
import styles from './style.css';

const UserRepos = ({
  user,
  filterOnKeyUp,
  selectUserRepo,
  showAllRepos,
  openSelectedRepos,
  hideSelectedRepos,
  hideSingleRepo,
  openSingleRepo,
}) => {
  const { userRepos, selectedReposAreEmpty, allReposAreShown } = user;
  return (
    <div className={styles.userRepos}>
      <UserReposHeader
        filterOnKeyUp={filterOnKeyUp}
        showAllRepos={showAllRepos}
        allReposAreShown={allReposAreShown}
        openSelectedRepos={openSelectedRepos}
        hideSelectedRepos={hideSelectedRepos}
        selectedReposAreEmpty={selectedReposAreEmpty}
      />
      <UserReposList
        userRepos={userRepos}
        selectUserRepo={selectUserRepo}
        hideSingleRepo={hideSingleRepo}
        openSingleRepo={openSingleRepo}
      />
    </div>
  );
};

UserRepos.propTypes = {
  user: PropTypes.shape({
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
    selectedReposAreEmpty: PropTypes.bool.isRequired,
    allReposAreShown: PropTypes.bool.isRequired,
  }).isRequired,
  filterOnKeyUp: PropTypes.func.isRequired,
  selectUserRepo: PropTypes.func.isRequired,
  showAllRepos: PropTypes.func.isRequired,
  openSelectedRepos: PropTypes.func.isRequired,
  hideSelectedRepos: PropTypes.func.isRequired,
  hideSingleRepo: PropTypes.func.isRequired,
  openSingleRepo: PropTypes.func.isRequired,
};

export default UserRepos;
