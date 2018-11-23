import { logIn, logOut } from './userSaga';
import { LOGIN_ACTION, LOGIN_ERROR_ACTION, LOGOUT_ACTION } from '../../constants/authConstants';
import userAuthService from '../../services/api/userAuthService';
import { testSaga } from 'redux-saga-test-plan';

describe('auth Saga', () => {
  const payload = {
    email: 'test',
    password: 'test'
  };

  it('should logIn user', () => {
    const response = {
      data: {
        token: 'token'
      }
    };

    const saga = testSaga(logIn, { payload })
      .next()
      .call(userAuthService.logIn, payload);

    saga
      .next(response)
      .put({ type: LOGIN_ACTION, payload: response.data })

      .next()
      .isDone();
  });

  it('should throw common error', () => {
    const error = {
      response: {
        data: {
          errors: {
            detail: 'Invalid email/password provided'
          }
        }
      }
    };

    testSaga(logIn, { payload })
      .next()
      .call(userAuthService.logIn, payload)
      .throw(error)
      .put({ type: LOGIN_ERROR_ACTION, payload: error.response.data.errors.detail });
  });

  it('should throw email error', () => {
    const error = {
      response: {
        data: {
          email: ['Email was not found']
        }
      }
    };

    const mockPayload = {
      ...payload,
      email: 'unexistent@email'
    };

    testSaga(logIn, { payload: mockPayload })
      .next()
      .call(userAuthService.logIn, mockPayload)
      .throw(error)
      .put({ type: LOGIN_ERROR_ACTION, payload: error.response.data.email[0] });
  });

  it('should throw password error', () => {
    const error = {
      response: {
        data: {
          password: ['Password is required']
        }
      }
    };

    const mockPayload = {
      ...payload,
      password: null
    };

    testSaga(logIn, { payload: mockPayload })
      .next()
      .call(userAuthService.logIn, mockPayload)
      .throw(error)
      .put({ type: LOGIN_ERROR_ACTION, payload: error.response.data.password[0] });
  });

  it('should logOut user', () => {
    testSaga(logOut)
      .next()
      .put({ type: LOGOUT_ACTION })
      .next()
      .isDone();
  });
});
