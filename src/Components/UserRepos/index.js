import React from 'react';
import PropTypes from 'prop-types';
import UserReposList from './UserReposList';
import UserReposHeader from './UserReposHeader';
import styles from './style.css';

const UserRepos = ({
  userRepos,
  selectUserRepo,
  hideSingleRepo,
  openSingleRepo,
  allReposAreShown,
  ...restProps
}) => (
  <div className={styles.userRepos}>
    <UserReposHeader
      allReposAreShown={allReposAreShown}
      {...restProps}
    />
    <UserReposList
      userRepos={userRepos}
      selectUserRepo={selectUserRepo}
      hideSingleRepo={hideSingleRepo}
      openSingleRepo={openSingleRepo}
      allReposAreShown={allReposAreShown}
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
  selectUserRepo: PropTypes.func.isRequired,
  hideSingleRepo: PropTypes.func.isRequired,
  openSingleRepo: PropTypes.func.isRequired,
};

export default UserRepos;
