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
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react';
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
    isVisible = true,
  },
  store: {
    hideSingleRepo,
    selectUserRepo,
  },
}) => {
  const handleHideSingleRepo = () => { hideSingleRepo(id); };

  const handleSelectUserRepo = () => { selectUserRepo(id); };
  return (
    <StyledCollapse
      in={isVisible}
      timeout={700}
      isfounded={isFounded ? 1 : 0}
    >
      <ListItem
        divider
        button
        onClick={handleSelectUserRepo}
        selected={isChecked}
        data-test="listItem"
      >
        <Checkbox
          checked={isChecked}
          color="primary"
          readOnly
          data-test="checkbox"
        />
        <Grid container direction="column">
          <ListItemText>
            <Typography variant="subtitle2" gutterBottom data-test="forkAndCount">
              {`${name}(forks: ${forks_count}, stars${stargazers_count})`}
            </Typography>
          </ListItemText>
          <ListItemText primary={description} data-test="description" />
        </Grid>
        <ListItemSecondaryAction>
          <Button
            variant="contained"
            color="primary"
            target="_blank"
            href={html_url}
            data-test="open"
          >
        open
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleHideSingleRepo}
            data-test="hide"
          >
        hide
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    </StyledCollapse>
  );
};

UserReposListItem.defaultProps = {
  listItem: {
    name: null,
    html_url: null,
    isChecked: false,
    isFounded: false,
    isVisible: false,
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
    isVisible: PropTypes.bool,
  }),
  store: MobxPropTypes.observableObject.isRequired,
};

export default inject('store')(observer(UserReposListItem));
