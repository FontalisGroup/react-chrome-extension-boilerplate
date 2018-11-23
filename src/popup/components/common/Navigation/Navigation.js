import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { NavLink } from 'react-router-dom';
import i18n from '../../../../i18n/index';
import { defaultNavigation } from '../../../container/Routes/routeConfig';

const Navigation = ({ navigation, isAuthenticated }) => {
  const nav = !isEmpty(navigation) ? navigation : defaultNavigation;
  return (
    <div className="app-nav-container">
      {nav.map(
        ({ to, text, authRequired }) =>
          authRequired && !isAuthenticated ? null : (
            <NavLink to={to} className="app-nav">
              {i18n.t(text)}
            </NavLink>
          )
      )}
    </div>
  );
};

export default Navigation;
