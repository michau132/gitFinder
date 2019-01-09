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
  handleSelectUserRepo,
  handleHideSingleRepo,
}) => (
  <StyledCollapse
    in={!isHidden}
    timeout={700}
    isfounded={isFounded ? 1 : 0}
  >
    <ListItem
      divider
      button
      onClick={() => handleSelectUserRepo(id)}
      selected={isChecked}
      className="listItem"
    >
      <Checkbox
        checked={isChecked}
        color="primary"
        readOnly
        className="checkbox"
      />
      <Grid container direction="column">
        <ListItemText>
          <Typography variant="subtitle2" gutterBottom className="forkAndCount">
            {`${name}(forks: ${forks_count}, stars${stargazers_count})`}
          </Typography>
        </ListItemText>
        <ListItemText primary={description} className="description" />
      </Grid>
      <ListItemSecondaryAction>
        <Button
          variant="contained"
          color="primary"
          target="_blank"
          href={html_url}
          className="open"
        >
        open
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleHideSingleRepo(id)}
          className="hide"
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
  handleSelectUserRepo: PropTypes.func.isRequired,
  handleHideSingleRepo: PropTypes.func.isRequired,
};

export default UserReposListItem;
