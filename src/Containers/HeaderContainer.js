import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from '../Components/Header';
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
    const { inputValue } = this.state;
    e.preventDefault();
    if (inputValue.match(/[0-9a-z]/g) || inputValue.length > 1) {
      onFormSubmit(inputValue);
      history.push(`/${inputValue}`);
      this.setState({
        errorInput: null,
      });
    } else {
      this.setState({
        errorInput: true,
      });
    }
  }

  updateInputValue = (val) => {
    this.setState({
      inputValue: val.target.value,
    });
  }

  render() {
    const { inputValue, errorInput } = this.state;
    return (
      <Header
        onFormSubmit={this.onFormSubmit}
        updateInputValue={this.updateInputValue}
        inputValue={inputValue}
        errorInput={errorInput}
      />
    );
  }
}


const mapDispatchToProps = {
  onFormSubmit: takeUserNameAndFetchData,
};

export default withRouter(connect(null, mapDispatchToProps)(HeaderContainer));
