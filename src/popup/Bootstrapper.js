/**
 * Everything that needs to be loaded before the app can be used.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { authenticateUser } from '../redux/actions/userActions';
import request from '../services/request';

/**
 * This container is used to pre-fetch data needed before app starts.
 */
class Bootstrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingFinished: false
    };
  }

  componentDidMount() {
    const { isAuthenticated } = this.props;
    if (!isAuthenticated) {
      this.checkUserAuthenticated();
    }

    this.setState({ isLoadingFinished: true });
  }

  checkUserAuthenticated = async () => {
    const token = await request.getToken();

    if (token) {
      request.attachTokenHeader(token);
      this.props.authenticateUser();
    }
  };

  render() {
    const { isLoadingFinished } = this.state;
    return isLoadingFinished ? this.props.children : 'Loading...';
  }
}

Bootstrapper.propTypes = {
  isAuthenticated: PropTypes.bool,
  authenticateUser: PropTypes.func
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.authenticated
});

const mapDispatchToProps = dispatch => bindActionCreators({ authenticateUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bootstrapper);
