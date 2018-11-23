import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestLogOut } from '../../../redux/actions/userActions';
import i18n from '../../../i18n';

class LogoutComponent extends Component {
  handleLogout = () => {
    this.props.requestLogOut();
  };

  render() {
    return (
      <button
        className="my-app-btn my-app-btn-outline-blue"
        type="button"
        onClick={this.handleLogout}
      >
        <span>{i18n.t('AUTH.LOGOUT_TEXT')}</span>
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ requestLogOut }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(LogoutComponent);
