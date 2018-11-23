/***********************
 *    Util functions   *
 ***********************/

/**
 * This variable can be used to check if we are in dev environment.
 */
export const __DEV__ = process.env.NODE_ENV === 'development';

/**
 * Log errors when we are in DEV environment.
 * @param {String} errMessage
 */
export function logError(errMessage) {
  if (__DEV__) {
    console.error(errMessage);
  }
}
