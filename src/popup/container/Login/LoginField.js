import React from 'react';

import ValidationInput from '../../components/common/Validation/ValidationInput';
import { required } from '../../../validation/rules';
import ErrorMessage from '../../components/common/Validation/ErrorMessage';

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

export default LoginField;
