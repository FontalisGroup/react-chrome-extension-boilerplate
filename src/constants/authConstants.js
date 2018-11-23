import { addActionTypePrefix } from './constants';

export const REQUEST_LOGIN_ACTION = addActionTypePrefix('REQUEST_LOGIN_ACTION');
export const LOGIN_ACTION = addActionTypePrefix('LOGIN_ACTION');
export const LOGIN_ERROR_ACTION = addActionTypePrefix('LOGIN_ERROR_ACTION');
export const REQUEST_LOGOUT_ACTION = addActionTypePrefix('REQUEST_LOGOUT_ACTION');
export const LOGOUT_ACTION = addActionTypePrefix('LOGOUT_ACTION');
export const CLEAR_LOGIN_ERRORS_ACTION = addActionTypePrefix('CLEAR_LOGIN_ERRORS_ACTION');
export const AUTH_STOP_FETCHING_ACTION = addActionTypePrefix('AUTH_STOP_FETCHING_ACTION');
