import React from 'react';
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react';
import styled from 'styled-components';
import {
  FormControlLabel, Checkbox, Grid, TextField, Button, Tooltip,
} from '@material-ui/core';


const StyledFormControlLabel = styled(FormControlLabel)`
  && {
    margin: 0;
    text-align: center;
  }
`;

const StyledTooltip = styled(props => (
  <Tooltip classes={{ popper: props.className, tooltip: 'tooltip' }} {...props} />
))`
  & .tooltip {
    font-size: 16px;
    max-width: 500px;
  }
`;

const UserReposHeader = ({
  store: {
    filterRepos,
    hideSelectedRepos,
    showAllRepos,
    selectAllRepos,
    isShowAllBtnDisabled,
    isNotAnyRepoChecked,
    filterProjectsInput,
    areAllReposSelected,
    foundedCount,
    repos,
  },
}) => {
  const handleFilterRepos = (e) => { filterRepos(e.target.value); };

  const handleShowAllRepos = () => { showAllRepos(); };

  const handleHideSelectedRepos = () => { hideSelectedRepos(); };

  const handleSelectAllRepos = () => { selectAllRepos(); };

  const openSelectedRepos = () => {
    const openInNewTab = url => window.open(url, '_blank');
    repos.forEach(repo => repo.isChecked && openInNewTab(repo.html_url));
  };

  return (
    <Grid container justify="space-between" alignItems="center" spacing={8}>
      <Grid item xs={1} container justify="center">
        <StyledFormControlLabel
          control={(
            <Checkbox
              value="checkedI"
              color="primary"
            />
          )}
          label="Select all"
          labelPlacement="top"
          onChange={handleSelectAllRepos}
          checked={areAllReposSelected}
          data-test="checkbox"
        />
      </Grid>
      <Grid item xs={7} container alignItems="center">
        <StyledTooltip
          title={`Founded ${foundedCount} repositories`}
          placement="bottom-end"
          open={!!foundedCount}
          leaveDelay={500}
        >
          <TextField
            type="search"
            label="filter projects"
            variant="outlined"
            value={filterProjectsInput}
            onChange={handleFilterRepos}
            fullWidth
            data-test="input"
          />
        </StyledTooltip>
      </Grid>
      <Grid item xs={4} container alignItems="center">
        <Grid container justify="space-around" spacing={8}>
          <Button
            onClick={openSelectedRepos}
            disabled={isNotAnyRepoChecked}
            variant="contained"
            color="primary"
            data-test="open"
          >
            open
          </Button>
          <Button
            onClick={handleHideSelectedRepos}
            disabled={isNotAnyRepoChecked}
            color="primary"
            variant="contained"
            data-test="hide"
          >
            hide
          </Button>
          <Button
            onClick={handleShowAllRepos}
            disabled={isShowAllBtnDisabled}
            variant="contained"
            color="primary"
            data-test="showAll"
          >
            show all
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

UserReposHeader.propTypes = {
  store: MobxPropTypes.observableObject.isRequired,
};

export default inject('store')(observer(UserReposHeader));
