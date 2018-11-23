import React from 'react';
import PropTypes from 'prop-types';

import ValidationInput from '../Validation/ValidationInput';
import { required } from '../../../validation/rules';
import ErrorMessage from '../Validation/ErrorMessage';

const LoginField = ({ value, error, onChange, labelText, ...props }) => {
  return (
    <React.Fragment>
      <label>{labelText}</label>
      <ValidationInput
        {...props}
        value={value}
        onChange={onChange}
        validate={[required()]}
        externalError={error}
      />
      <ErrorMessage error={error} />
    </React.Fragment>
  );
};

LoginField.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  labelText: PropTypes.string
};

export default LoginField;
