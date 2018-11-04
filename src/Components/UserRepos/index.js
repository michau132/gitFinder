import React from 'react';
import PropTypes from 'prop-types';
import UserReposList from './UserReposList';
import UserReposHeader from './UserReposHeader';

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
  <div>
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
