import React from 'react';

const ErrorMessage = ({ type, error }) => {
  const color = type === 'error' ? '#ed1c24' : null;
  return error && <p style={{ color }}>{error}</p>;
};

ErrorMessage.defaultProps = {
  type: 'error'
};

export default ErrorMessage;
