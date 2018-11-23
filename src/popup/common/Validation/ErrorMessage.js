import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ type, error }) => {
  const color = type === 'error' ? '#ed1c24' : null;
  return error && <p style={{ color }}>{error}</p>;
};

ErrorMessage.propTypes = {
  error: PropTypes.string,
  type: PropTypes.string
};

ErrorMessage.defaultProps = {
  type: 'error'
};

export default ErrorMessage;
