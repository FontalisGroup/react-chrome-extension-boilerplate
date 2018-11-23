import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { NavLink } from 'react-router-dom';
import i18n from '../../../i18n/index';
import { defaultNavigation } from '../Routes/routeConfig';

const Navigation = ({ navigation, isAuthenticated }) => {
  const nav = !isEmpty(navigation) ? navigation : defaultNavigation;
  return (
    <div className="app-nav-container">
      {nav.map(
        ({ to, text, authRequired }) =>
          authRequired && !isAuthenticated ? null : (
            <NavLink key={to} to={to} className="app-nav">
              {i18n.t(text)}
            </NavLink>
          )
      )}
    </div>
  );
};

Navigation.propTypes = {
  navigation: PropTypes.arrayOf({
    to: PropTypes.string,
    text: PropTypes.string,
    authRequired: PropTypes.bool
  }),
  isAuthenticated: PropTypes.bool
};

export default Navigation;
