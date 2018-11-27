import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './style.css';
import Button from '../../../Button';

const UserReposListItem = ({
  listItem: {
    id,
    name,
    forks_count,
    stargazers_count,
    description,
    html_url,
    isChecked,
    isFounded,
    isHidden,
    allReposAreShown,
  },
  selectUserRepo,
  hideSingleRepo,
  openSingleRepo,
}) => (
  <li
    className={classnames(
      styles.listItem,
      { [styles.isChecked]: isChecked },
      { [styles.isFounded]: isFounded },
      { [styles.isHidden]: isHidden },
      { [styles.allRepos]: !allReposAreShown },
    )}
  >
    <div className={styles.listItemInfo} onClick={() => selectUserRepo(id)} role="presentation">
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
    isChecked: PropTypes.bool,
    isFounded: PropTypes.bool,
    isHidden: PropTypes.bool,
  }),
  selectUserRepo: PropTypes.func.isRequired,
  hideSingleRepo: PropTypes.func.isRequired,
  openSingleRepo: PropTypes.func.isRequired,
};

export default UserReposListItem;
