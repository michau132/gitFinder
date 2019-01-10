import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Button,
  Tooltip,
  Grid,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import styled from 'styled-components';


const StyledTooltip = styled(props => (
  <Tooltip classes={{ popper: props.className, tooltip: 'asd' }} {...props} />
))`
  & .asd {
    font-size: 15px;
    max-width: 600px;
  }
`;

const StyledTextField = styled(TextField)`
  width: calc(100% - 115px);
`;

const StyledHeader = styled.header`
  background-color: #f5f5f5;
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
  margin-bottom: 15px;
`;

const Header = ({
  onFormSubmit, inputValue, updateInputValue, errorInput,
}) => (
  <StyledHeader>
    <form
      onSubmit={onFormSubmit}
    >
      <Grid container justify="space-between">
        <StyledTooltip
          open={errorInput}
          title="Invalid github login. In login you can&apos;t have special signs like blank space, @, #, etc."
          disableFocusListener
          disableHoverListener
          disableTouchListener
        >
          <StyledTextField
            type="search"
            error={errorInput}
            onChange={updateInputValue}
            value={inputValue}
            label="Github login"
            variant="outlined"
            color="inherit"
          />
        </StyledTooltip>
        <Button type="submit" variant="contained" color="primary">
            Search
          <Search />
        </Button>
      </Grid>
    </form>
  </StyledHeader>
);

Header.defaultProps = {
  errorInput: null,
};

Header.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  updateInputValue: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  errorInput: PropTypes.bool,
};

export default Header;
