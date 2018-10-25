import React from 'react';
import PropTypes from 'prop-types';

const UserReposListItem = ({ listItem }) => (
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

UserReposListItem.defaultProps = {
  listItem: {
    name: null,
    pushed_at: null,
  },
};

UserReposListItem.propTypes = {
  listItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    pushed_at: PropTypes.string.isRequired,
  }),
};

export default UserReposListItem;
