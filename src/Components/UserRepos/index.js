import React from 'react';
import PropTypes from 'prop-types';
import UserReposList from './UserReposList';
import UserReposHeader from './UserReposHeader';

const UserRepos = ({
  filterRepos,
  filterOnKeyUp,
  selectUserRepo,
  showAllRepos,
  openSelectedRepos,
  hideSelectedRepos,
  hideSingleRepo,
  openSingleRepo,
}) => {
  const { userReposFiltered, selectedReposAreEmpty, allReposAreShown } = filterRepos;
  return (
    <div style={{ width: '74%' }}>
      <UserReposHeader
        filterOnKeyUp={filterOnKeyUp}
        showAllRepos={showAllRepos}
        allReposAreShown={allReposAreShown}
        openSelectedRepos={openSelectedRepos}
        hideSelectedRepos={hideSelectedRepos}
        selectedReposAreEmpty={selectedReposAreEmpty}
      />
      <UserReposList
        userRepos={userReposFiltered}
        selectUserRepo={selectUserRepo}
        hideSingleRepo={hideSingleRepo}
        openSingleRepo={openSingleRepo}
      />
    </div>
  );
};

UserRepos.propTypes = {
  filterRepos: PropTypes.shape({
    userReposFiltered: PropTypes.arrayOf(
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
