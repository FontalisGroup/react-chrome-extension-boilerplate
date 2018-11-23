import React, { Component } from 'react';
import composeValidation from '../../../../validation/composeValidation';
import classNames from 'classnames';

class ValidationInput extends Component {
  state = {
    error: ''
  };

  componentDidMount() {
    const { validate, name, value, onChange } = this.props;

    this.validation = composeValidation(validate);

    onChange({ name, value, error: '', validate });
  }

  validate = value => {
    return this.validation(value);
  };

  handleChange = e => {
    const { name, value } = e.target;
    const { validate } = this.props;

    const error = this.validate(value);
    const field = error
      ? { name, value, error: error, validate }
      : { name, value, error: '', validate };

    this.setState({ error });
    return this.props.onChange(field);
  };

  render() {
    const { error } = this.state;
    const { externalError, ...rest } = this.props;

    return (
      <React.Fragment>
        <input
          {...rest}
          onChange={this.handleChange}
          className={classNames({ 'input--error': error || externalError })}
        />
      </React.Fragment>
    );
  }
}

export default ValidationInput;
