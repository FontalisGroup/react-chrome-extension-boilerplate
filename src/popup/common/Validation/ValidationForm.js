import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { logError } from '../../../util/util';
import composeValidation from '../../../validation/composeValidation';

class ValidationForm extends React.Component {
  state = {
    onSubmit: () => {}
  };

  componentDidMount() {
    const { fields, onSubmitValidate } = this.props;

    if (onSubmitValidate && !fields) {
      logError('You should provide fields to ValidationForm to be able to validate them onSubmit');
    }

    this.setState({
      onSubmit: this.onSubmit
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const { fields, onSubmitValidate, onSubmit } = this.props;

    if (onSubmitValidate) {
      const fieldsWithValidationKeys = Object.keys(fields).filter(key => fields[key].validate);
      const errorExists = fieldsWithValidationKeys.filter(this.hasErrors);
      if (!isEmpty(errorExists)) {
        const fieldsWithErrors = fieldsWithValidationKeys.map(this.getErrors);
        return onSubmit({ hasErrors: true, fields: fieldsWithErrors });
      }
    }

    return onSubmit({ hasErrors: false, fields });
  };

  hasErrors = key => {
    const { fields } = this.props;
    return composeValidation(fields[key].validate)(fields[key].value);
  };

  getErrors = key => {
    const { fields } = this.props;
    return {
      ...fields[key],
      name: key,
      error: composeValidation(fields[key].validate)(fields[key].value)
    };
  };

  renderFields = children => {
    if (typeof children !== 'function') {
      logError('Children should be provided as a function');
    }

    return children(this.state);
  };

  render() {
    return <React.Fragment>{this.renderFields(this.props.children)}</React.Fragment>;
  }
}

ValidationForm.propTypes = {
  fields: PropTypes.shape({}),
  onSubmitValidate: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
};

export default ValidationForm;
