import { proxyStore } from '../redux/store';

/**
 * Use this function for dispatching actions to redux store.
 * Since we are using react-chrome-redux to allow us
 * communication with redux store, we need to use it's
 * dispatch function. This is basically a wrapper for
 * easier action dispatching.
 * @param {ActionType} type action type.
 * @param payload action payload
 */
export function dispatchAction(type, payload) {
  proxyStore.dispatch({ type, payload });
}
