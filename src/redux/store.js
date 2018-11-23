import { Store } from 'react-chrome-redux';
import { APP_NAME } from '../constants/constants';

/**
 * Options for proxy store.
 * `portName` is a required string and defines the name of the port for state transition changes.
 */
const proxyStoreOptions = { portName: APP_NAME };

/**
 * Proxy store which allows us to communicate with our redux store.
 */
export const proxyStore = new Store(proxyStoreOptions);
