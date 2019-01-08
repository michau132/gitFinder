/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { List, Typography } from '@material-ui/core';
import styled from 'styled-components';
import UserReposListItem from './UserReposListItem';

const StyledFieldset = styled.fieldset`
  display: block;
  width: 100%;
`;

const StyledLegend = styled.legend`
  margin-left: 10px;
`;

const StyledList = styled(List)`
  list-style: none;
  height: 450px;
  overflow: hidden;
  overflow-y: scroll;
`;

const UserReposList = ({
  repos,
  ...restProps
}) => (
  <StyledFieldset>
    <StyledLegend>
      <Typography variant="subtitle1">
        Projects
      </Typography>
    </StyledLegend>

    <StyledList>
      {
        repos.map(listItem => (
          <UserReposListItem
            listItem={listItem}
            key={listItem.id}
            {...restProps}
          />
        ))
      }
    </StyledList>
  </StyledFieldset>
);

UserReposList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      forks_count: PropTypes.number,
      stargazers_count: PropTypes.number,
      description: PropTypes.string,
      html_url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleHideSingleRepo: PropTypes.func.isRequired,
  handleSelectUserRepo: PropTypes.func.isRequired,
};

export default UserReposList;
