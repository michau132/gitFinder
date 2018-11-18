/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './style.css';
import Button from '../../../Button';

const UserReposListItem = ({
  listItem: {
    id,
    isChecked,
    name,
    forks_count,
    stargazers_count,
    description,
    html_url,
  },
  selectUserRepo,
  hideSingleRepo,
  openSingleRepo,
}) => (
  <li className={classnames(styles.listItem, { [styles.active]: isChecked })}>
    <div className={styles.listItemInfo} onClick={() => selectUserRepo(id)}>
      <div className={styles.infoWrapper}>
        <input type="checkbox" checked={isChecked || false} readOnly />
        <h4 className={styles.infoName}>
          {name}
          (forks:
          {' '}
          {forks_count}
          ,
          stars:
          {' '}
          {stargazers_count}
          )
        </h4>
      </div>
      <p className={styles.infoDesc}>{description}</p>
    </div>
    <div className={styles.btnWrapper}>
      <Button
        type="button"
        onClick={() => openSingleRepo(html_url)}
        text="open"
      />
      <Button
        type="button"
        onClick={() => hideSingleRepo(id)}
        text="hide"
      />
    </div>
  </li>
);

UserReposListItem.defaultProps = {
  listItem: {
    name: null,
    id: null,
    html_url: null,
  },
};

UserReposListItem.propTypes = {
  listItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    forks_count: PropTypes.number,
    stargazers_count: PropTypes.number,
    description: PropTypes.string,
    html_url: PropTypes.string.isRequired,
  }),
  selectUserRepo: PropTypes.func.isRequired,
  hideSingleRepo: PropTypes.func.isRequired,
  openSingleRepo: PropTypes.func.isRequired,
};

export default UserReposListItem;
