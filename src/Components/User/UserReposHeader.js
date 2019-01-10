import React from 'react';
import PropTypes from 'prop-types';
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
  handleFilterRepos,
  openSelectedRepos,
  handleHideSelectedRepos,
  handleShowAllRepos,
  handleSelectAllRepos,
  restStore: {
    isShowAllBtnDisabled,
    selectedReposAreEmpty,
    filterProjectsInput,
    allReposAreSelected,
    isFoundedCount,
  },
}) => (
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
        checked={allReposAreSelected}
        className="checkbox"
      />
    </Grid>
    <Grid item xs={7} container alignItems="center">
      <StyledTooltip
        title={`Founded ${isFoundedCount} repositories`}
        placement="bottom-end"
        open={!!isFoundedCount}
        leaveDelay={500}
      >
        <TextField
          type="search"
          label="filter projects"
          variant="outlined"
          value={filterProjectsInput}
          onChange={handleFilterRepos}
          fullWidth
          className="input"
        />
      </StyledTooltip>
    </Grid>
    <Grid item xs={4} container alignItems="center">
      <Grid container justify="space-around" spacing={8}>
        <Button
          onClick={openSelectedRepos}
          disabled={selectedReposAreEmpty}
          variant="contained"
          color="primary"
          className="open"
        >
        open
        </Button>
        <Button
          onClick={handleHideSelectedRepos}
          disabled={selectedReposAreEmpty}
          color="primary"
          variant="contained"
          className="hide"
        >
        hide
        </Button>
        <Button
          onClick={handleShowAllRepos}
          disabled={isShowAllBtnDisabled}
          variant="contained"
          color="primary"
          className="showAll"
        >
        show all
        </Button>
      </Grid>
    </Grid>
  </Grid>
);

UserReposHeader.propTypes = {
  handleFilterRepos: PropTypes.func.isRequired,
  handleShowAllRepos: PropTypes.func.isRequired,
  openSelectedRepos: PropTypes.func.isRequired,
  handleHideSelectedRepos: PropTypes.func.isRequired,
  handleSelectAllRepos: PropTypes.func.isRequired,
  restStore: PropTypes.shape({
    isShowAllBtnDisabled: PropTypes.bool.isRequired,
    selectedReposAreEmpty: PropTypes.bool.isRequired,
    filterProjectsInput: PropTypes.string.isRequired,
    allReposAreSelected: PropTypes.bool.isRequired,
  }).isRequired,
};

export default UserReposHeader;
