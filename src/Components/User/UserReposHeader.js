import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControlLabel, Checkbox, Grid, TextField, Button, withStyles,
} from '@material-ui/core';

const styles = {
  formControl: {
    margin: 0,
    textAlign: 'center',
  },
};

const UserReposHeader = ({
  handleFilterRepos,
  openSelectedRepos,
  handleHideSelectedRepos,
  handleShowAllRepos,
  handleSelectAllRepos,
  classes,
  restStore: {
    isShowAllBtnDisabled,
    selectedReposAreEmpty,
    filterProjectsInput,
    allReposAreSelected,
  },
}) => (
  <Grid container justify="space-between" alignItems="center" spacing={8}>
    <Grid item xs={1} container justify="center">
      <FormControlLabel
        classes={{ root: classes.formControl }}
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
      />
    </Grid>
    <Grid item xs={7} container alignItems="center">
      <TextField
        type="search"
        label="filter projects"
        variant="outlined"
        value={filterProjectsInput}
        onChange={handleFilterRepos}
        fullWidth
      />
    </Grid>
    <Grid item xs={4} container alignItems="center">
      <Grid container justify="space-around" spacing={8}>
        <Button
          onClick={openSelectedRepos}
          disabled={selectedReposAreEmpty}
          variant="contained"
          color="primary"
        >
        open
        </Button>
        <Button
          onClick={handleHideSelectedRepos}
          disabled={selectedReposAreEmpty}
          color="primary"
          variant="contained"
        >
        hide
        </Button>
        <Button
          onClick={handleShowAllRepos}
          disabled={isShowAllBtnDisabled}
          variant="contained"
          color="primary"
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
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(UserReposHeader);
