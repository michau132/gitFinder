/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import githubUsernameRegex from 'github-username-regex';

class HeaderContainer extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      pathname: '',
      errorInput: false,
    };
  }

  componentDidMount() {
    const { location: { pathname } } = this.props;
    const path = pathname.substring(1);
    const isValidPath = !githubUsernameRegex.test(path);
    if (path) {
      this.setState({
        inputValue: path,
        pathname,
        errorInput: isValidPath,
      });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { pathname } = nextProps.location;
    if (pathname !== prevState.pathname) {
      return {
        inputValue: pathname.substring(1),
        pathname,
      };
    }
    return null;
  }

  onFormSubmit = (e) => {
    const { history } = this.props;
    const { inputValue, errorInput } = this.state;
    e.preventDefault();
    if (errorInput || !inputValue) {
      return;
    }
    history.push(`/${inputValue}`);
  }

  updateInputValue = (val) => {
    const { value } = val.target;
    if (githubUsernameRegex.test(value) || !value) {
      this.setState({
        inputValue: value,
        errorInput: false,
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


export { HeaderContainer };

export default withRouter(HeaderContainer);
