const ACTION_TYPE_PREFIX = 'APP';

export const addActionTypePrefix = actionType => `${ACTION_TYPE_PREFIX}@${actionType}`;

export const APP_NAME = addActionTypePrefix('APP_NAME');

export const LOCAL_STORAGE_TOKEN = addActionTypePrefix('token');
