import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearErrors, requestLogIn } from '../../../redux/actions/userActions';
import i18n from '../../../i18n/index';
import ErrorMessage from '../Validation/ErrorMessage';
import ValidationForm from '../Validation/ValidationForm';
import LoginField from './LoginField';
import { populateFieldsOnError } from '../../../util/helpers';
import LoadingComponent from '../Loader/LoadingComponent';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: { value: '', error: '' },
      password: { value: '', error: '' },
      hasErrors: false
    };
  }

  handleInputChange = field => {
    const { name, value, error, validate } = field;

    this.setState(prevState => ({
      ...prevState,
      [name]: {
        value,
        error,
        validate
      },
      hasErrors: !!error
    }));

    this.clearErrors();
  };

  clearErrors = () => {
    const { clearErrors, error } = this.props;

    if (error) {
      clearErrors();
    }
  };

  handleLogin = ({ hasErrors, fields }) => {
    const { email, password } = this.state;

    if (hasErrors) {
      const nextState = populateFieldsOnError(fields);

      return this.setState(prevState => ({
        ...prevState,
        ...nextState
      }));
    }

    this.props.requestLogIn({ email: email.value, password: password.value });
  };

  renderSubmitButton(onSubmit) {
    const { isFetching } = this.props;
    const { hasErrors } = this.state;

    return (
      <button
        onClick={onSubmit}
        disabled={hasErrors}
        className="my-app-btn my-app-btn-outline-blue"
      >
        {isFetching ? <LoadingComponent /> : i18n.t('AUTH.SUBMIT')}
      </button>
    );
  }

  render() {
    const { error } = this.props;
    const { email, password } = this.state;
    return (
      <ValidationForm fields={this.state} onSubmit={this.handleLogin} onSubmitValidate>
        {({ onSubmit }) => (
          <form>
            <div>
              <div>
                <div>
                  <p>{i18n.t('AUTH.SIGN_IN_DESCRIPTION')}</p>
                </div>
              </div>

              <div>
                <ErrorMessage error={error} />
                <LoginField
                  name="email"
                  type="email"
                  placeholder={i18n.t('AUTH.PLACEHOLDER_EMAIL')}
                  value={email.value}
                  error={email.error}
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <LoginField
                  name="password"
                  type="password"
                  placeholder={i18n.t('AUTH.PLACEHOLDER_PASSWORD')}
                  value={password.value}
                  error={password.error}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div>{this.renderSubmitButton(onSubmit)}</div>
          </form>
        )}
      </ValidationForm>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.user.error,
    isFetching: state.user.isFetching
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ requestLogIn, clearErrors }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
