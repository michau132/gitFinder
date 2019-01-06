/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Grid,
  Typography,
  Collapse,
} from '@material-ui/core';
import styled from 'styled-components';

const StyledCollapse = styled(Collapse)`
  ${({ isfounded }) => (isfounded ? 'background-color: rgba(0, 0, 0, 0.24)' : '')}
`;

const UserReposListItem = ({
  listItem: {
    id,
    name,
    forks_count,
    stargazers_count,
    description,
    html_url,
    isChecked = false,
    isFounded = false,
    isHidden = false,
  },
  selectUserRepo,
  hideSingleRepo,
}) => (
  <StyledCollapse
    in={!isHidden}
    timeout={700}
    isfounded={isFounded ? 1 : 0}
  >
    <ListItem
      divider
      button
      onClick={() => selectUserRepo(id)}
      selected={isChecked}
    >
      <Checkbox
        checked={isChecked}
        color="primary"
        readOnly
      />
      <Grid container direction="column">
        <ListItemText>
          <Typography variant="subtitle2" gutterBottom>
            {`${name}(forks: ${forks_count}, stars${stargazers_count})`}
          </Typography>
        </ListItemText>
        <ListItemText primary={description} />
      </Grid>
      <ListItemSecondaryAction>
        <Button
          variant="contained"
          color="primary"
          target="_blank"
          href={html_url}
        >
        open
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => hideSingleRepo(id)}
        >
        hide
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  </StyledCollapse>
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
};

export default UserReposListItem;
