import { required } from './rules';
import { stub } from 'sinon';
import i18n from '../i18n';

describe('rules.js', () => {
  const validation = required();
  it('should call required and return error', () => {
    const requiredError = 'This field is required';
    stub(i18n, 't').returns(requiredError);
    const err = validation('');

    expect(err).toBe(requiredError);
  });

  it('should call required and return null', () => {
    const res = validation('test');

    expect(res).toBeNull();
  });
});
