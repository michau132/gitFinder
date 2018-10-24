import React from 'react';
import PropTypes from 'prop-types';

const UserRepoListItem = ({ listItem }) => (
  <li style={{ paddingTop: '10px' }}>
    <b>
      <i>
        Name repo:
        {listItem.name}
      </i>
    </b>
    <br />
    <b>modified:</b>
    {' '}
    {listItem.pushed_at}
  </li>
);

UserRepoListItem.defaultProps = {
  listItem: {
    name: null,
    pushed_at: null,
  },
};

UserRepoListItem.propTypes = {
  listItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    pushed_at: PropTypes.string.isRequired,
  }),
};

export default UserRepoListItem;
