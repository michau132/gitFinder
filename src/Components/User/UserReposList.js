import React from 'react';
import { List, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { observer, inject, PropTypes as MobxPropTypes } from 'mobx-react';
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
  store: { repos },
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
          />
        ))
      }
    </StyledList>
  </StyledFieldset>
);

UserReposList.propTypes = {
  store: MobxPropTypes.observableObject.isRequired,
};


export default inject('store')(observer(UserReposList));
