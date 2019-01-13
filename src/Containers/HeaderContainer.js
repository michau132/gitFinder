import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import githubUsernameRegex from 'github-username-regex';

const isValidUser = user => githubUsernameRegex.test(user);

class HeaderContainer extends Component {
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
    if (path) {
      this.setState({
        inputValue: path,
        pathname,
        errorInput: !isValidUser(path),
      });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { pathname } = nextProps.location;
    if (pathname !== prevState.pathname) {
      const path = pathname.substring(1);
      return {
        inputValue: path,
        pathname,
        errorInput: !isValidUser(path),
      };
    }
    return null;
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const { history, location: { pathname } } = this.props;
    const { inputValue, errorInput } = this.state;
    const isPathSameAsInputValue = pathname.substring(1) === inputValue;
    if (errorInput || !inputValue || isPathSameAsInputValue) {
      return;
    }
    history.push(`/${inputValue}`);
  }

  updateInputValue = (val) => {
    const { value } = val.target;
    if (isValidUser(value) || !value) {
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
