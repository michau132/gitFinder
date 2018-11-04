import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import UserReposListItem from '../UserReposListItem/UserReposListItem';

const UserRepos = ({ userRepos }) => (
  <div className={styles.userRepos}>
    <div className={styles.filterForm}>
      <span className={styles.square} />
      <form className={styles.form}>
        <input className={styles.formText} type="text" placeholder="filter projects" />
        <button type="submit">Open</button>
        <button type="submit">Hide</button>
        <button type="submit">Show all</button>
      </form>
    </div>
    <fieldset>
      <legend>Projects</legend>
      <ul className={styles.listRepos}>
        {
            userRepos.map(listItem => (
              <UserReposListItem listItem={listItem} key={listItem.id} />
            ))
          }
      </ul>
    </fieldset>
  </div>
);

UserRepos.propTypes = {
  userRepos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      pushed_at: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default UserRepos;
