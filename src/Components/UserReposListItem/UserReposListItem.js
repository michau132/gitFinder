import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const UserReposListItem = ({ listItem }) => (
  <li className={styles.listItem}>
    <div className={styles.listItemInfo}>
      <div className={styles.infoWrapper}>
        <input type="checkbox" />
        <h4 className={styles.infoName}>
          {listItem.name}
          (forks:
          {' '}
          {listItem.forks_count}
          ,
          stars:
          {' '}
          {listItem.stargazers_count}
          )
        </h4>
      </div>
      <p className={styles.infoDesc}>{listItem.description}</p>
    </div>
    <div className={styles.btnWrapper}>
      <a href={listItem.html_url} target="blank">open</a>
      <button type="button">hide</button>
    </div>
  </li>
);

UserReposListItem.defaultProps = {
  listItem: {
    name: null,
    pushed_at: null,
  },
};

UserReposListItem.propTypes = {
  listItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default UserReposListItem;
