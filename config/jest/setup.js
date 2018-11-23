const chrome = require('sinon-chrome');

/**
 * Chrome has to be binded to global object so we can
 * properly mock chrome.storage calls.
 */
global.chrome = chrome;
