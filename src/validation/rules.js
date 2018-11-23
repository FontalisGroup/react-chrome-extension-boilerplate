import i18n from '../i18n';

export const required = () => value => (!value ? i18n.t('VALIDATION.REQUIRED') : null);
