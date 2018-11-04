import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import UserReposListItem from './UserReposListItem';

const UserReposList = ({
  userRepos,
  selectUserRepo,
  hideSingleRepo,
  openSingleRepo,
}) => (
  <fieldset>
    <legend>Projects</legend>
    <ul className={styles.listRepos}>
      {
        userRepos.map(listItem => (
          <UserReposListItem
            listItem={listItem}
            key={listItem.id}
            selectUserRepo={selectUserRepo}
            hideSingleRepo={hideSingleRepo}
            openSingleRepo={openSingleRepo}
          />
        ))
      }
    </ul>
  </fieldset>
);

UserReposList.propTypes = {
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
  hideSingleRepo: PropTypes.func.isRequired,
  openSingleRepo: PropTypes.func.isRequired,
  selectUserRepo: PropTypes.func.isRequired,
};

export default UserReposList;
