import { required } from './rules';
import composeValidation from './composeValidation';
import i18n from '../i18n';
import { stub } from 'sinon';

describe('composeValidation.js', () => {
  const validationFunctions = [required()];
  const validation = composeValidation(validationFunctions);

  it('should composeValidation functions and return error', () => {
    const expectedError = 'This field is required';
    const translation = stub(i18n, 't').returns(expectedError);

    const err = validation('');

    expect(err).toBe(expectedError);
    expect(translation.calledOnce).toBeTruthy();
  });

  it('should composeValidation functions and return null', () => {
    const res = validation('test');

    expect(res).toBeNull();
  });
});
