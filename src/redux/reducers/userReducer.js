import createReducer from '../util/createReducer';
import {
  AUTH_STOP_FETCHING_ACTION,
  CLEAR_LOGIN_ERRORS_ACTION,
  LOGIN_ACTION,
  LOGIN_ERROR_ACTION,
  LOGOUT_ACTION,
  REQUEST_LOGIN_ACTION
} from '../../constants/authConstants';

const initialState = {
  isFetching: false,
  authenticated: false,
  error: ''
};

export default createReducer(
  {
    [REQUEST_LOGIN_ACTION]: userLoginRequest,
    [LOGIN_ACTION]: userLogin,
    [LOGIN_ERROR_ACTION]: updateErrors,
    [LOGOUT_ACTION]: userLogout,
    [CLEAR_LOGIN_ERRORS_ACTION]: clearErrors,
    [AUTH_STOP_FETCHING_ACTION]: stopFetching
  },
  initialState
);

function userLoginRequest(state) {
  return {
    ...state,
    isFetching: true
  };
}

function userLogin(state) {
  return {
    ...state,
    error: '',
    isFetching: false,
    authenticated: true
  };
}

function updateErrors(state, { payload }) {
  return {
    ...state,
    isFetching: false,
    error: payload
  };
}

function userLogout(state) {
  return {
    ...state,
    error: '',
    authenticated: false
  };
}

function clearErrors(state) {
  return {
    ...state,
    error: ''
  };
}

function stopFetching(state) {
  return {
    ...state,
    isFetching: false
  };
}
