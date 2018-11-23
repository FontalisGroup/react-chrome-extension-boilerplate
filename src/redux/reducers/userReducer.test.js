import reducer from './userReducer';
import {
  AUTH_STOP_FETCHING_ACTION,
  CLEAR_LOGIN_ERRORS_ACTION,
  LOGIN_ACTION,
  LOGIN_ERROR_ACTION,
  LOGOUT_ACTION,
  REQUEST_LOGIN_ACTION
} from '../../constants/authConstants';

const mockInitialState = {
  isFetching: false,
  authenticated: false,
  error: ''
};

describe('userReducer test', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(mockInitialState);
  });

  it('should request user login', () => {
    expect(
      reducer(mockInitialState, {
        type: REQUEST_LOGIN_ACTION
      })
    ).toEqual({
      ...mockInitialState,
      isFetching: true
    });
  });

  it('should login user', () => {
    const loginState = reducer(mockInitialState, {
      type: LOGIN_ACTION
    });

    const expectedState = {
      ...mockInitialState,
      error: '',
      isFetching: false,
      authenticated: true
    };

    expect(loginState).toEqual(expectedState);
  });

  it('should update errors', () => {
    const errorState = reducer(mockInitialState, {
      type: LOGIN_ERROR_ACTION,
      payload: 'Error'
    });

    const expectedState = {
      ...mockInitialState,
      error: 'Error'
    };

    expect(errorState).toEqual(expectedState);
  });

  it('should logout user', () => {
    const logoutState = reducer(
      {
        ...mockInitialState,
        authenticated: true
      },
      {
        type: LOGOUT_ACTION
      }
    );

    const expectedState = {
      ...mockInitialState,
      authenticated: false
    };

    expect(logoutState).toEqual(expectedState);
  });

  it('should clear errors', () => {
    const clearErrorsState = reducer(
      {
        ...mockInitialState,
        error: 'Error'
      },
      {
        type: CLEAR_LOGIN_ERRORS_ACTION
      }
    );

    const expectedState = {
      ...mockInitialState,
      error: ''
    };

    expect(clearErrorsState).toEqual(expectedState);
  });

  it('should stop fetching', () => {
    const stopFetchingState = reducer(mockInitialState, {
      type: AUTH_STOP_FETCHING_ACTION
    });

    const expectedState = {
      ...mockInitialState,
      isFetching: false
    };

    expect(stopFetchingState).toEqual(expectedState);
  });
});
