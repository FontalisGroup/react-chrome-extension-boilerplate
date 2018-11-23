import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { proxyStore } from '../redux/store';

import i18n from '../i18n';

import App from '../popup/App';

import './index.scss';

proxyStore.ready().then(() => {
  ReactDOM.render(
    <Provider store={proxyStore}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>,
    document.getElementById('my-app')
  );
});
