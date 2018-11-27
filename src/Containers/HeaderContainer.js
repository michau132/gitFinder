import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import githubUsernameRegex from 'github-username-regex';
import takeUserNameAndFetchData from '../actions/fetchData';

class HeaderContainer extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      inputValue: '',
      errorInput: null,
    };
  }

  onFormSubmit = (e) => {
    const { onFormSubmit, history } = this.props;
    const { inputValue, errorInput } = this.state;
    e.preventDefault();
    if (errorInput) {
      return;
    }
    onFormSubmit(inputValue);
    history.push(`/${inputValue}`);
  }

  updateInputValue = (val) => {
    const { value } = val.target;
    if (githubUsernameRegex.test(value)) {
      this.setState({
        inputValue: value,
        errorInput: null,
      });
    } else {
      this.setState({
        errorInput: true,
        inputValue: value,
      });
    }
  }

  render() {
    const { render } = this.props;
    const { inputValue, errorInput } = this.state;
    const { onFormSubmit, updateInputValue } = this;
    return (
      <Fragment>
        {
          render({
            onFormSubmit,
            updateInputValue,
            inputValue,
            errorInput,
          })
      }
      </Fragment>
    );
  }
}


const mapDispatchToProps = {
  onFormSubmit: takeUserNameAndFetchData,
};

export { HeaderContainer };

export default withRouter(connect(null, mapDispatchToProps)(HeaderContainer));
