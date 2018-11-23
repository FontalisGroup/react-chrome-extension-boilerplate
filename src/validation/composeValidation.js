/**
 * Function that composes validation rules for a given field and
 * checks against them if the field is valid.
 *
 * @param {Array} validation validation rules.
 */
const composeValidation = validation => field =>
  validation.reduce((acc, validationFunc) => (acc === null ? validationFunc(field) : acc), null);

export default composeValidation;
