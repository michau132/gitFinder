
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
  setReposOnKeyUp,
  openSelectedRepos,
  hideSelectedRepos,
  showAllRepos,
  selectAllRepos,
  isShowAllBtnDisabled,
  selectedReposAreEmpty,
  filterProjectsInput,
  allReposAreSelected,
  classes,
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
        onChange={selectAllRepos}
        checked={allReposAreSelected}
      />
    </Grid>
    <Grid item xs={7} container alignItems="center">
      <TextField
        type="search"
        label="filter projects"
        variant="outlined"
        value={filterProjectsInput}
        onChange={e => setReposOnKeyUp(e.target.value)}
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
          onClick={hideSelectedRepos}
          disabled={selectedReposAreEmpty}
          color="primary"
          variant="contained"
        >
        hide
        </Button>
        <Button
          onClick={showAllRepos}
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
  setReposOnKeyUp: PropTypes.func.isRequired,
  showAllRepos: PropTypes.func.isRequired,
  isShowAllBtnDisabled: PropTypes.bool.isRequired,
  selectedReposAreEmpty: PropTypes.bool.isRequired,
  filterProjectsInput: PropTypes.string.isRequired,
  allReposAreSelected: PropTypes.bool.isRequired,
  openSelectedRepos: PropTypes.func.isRequired,
  hideSelectedRepos: PropTypes.func.isRequired,
  selectAllRepos: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(UserReposHeader);
