import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MemoryRouter, Route } from 'react-router';
import { connect } from 'react-redux';
import LoginComponent from '../Auth/LoginComponent';
import Navigation from '../Navigation/Navigation';
import LogoutComponent from '../Auth/LogoutComponent';
import { routes } from './routeConfig';

class Routes extends Component {
  renderComponent = (Component, authRequired, props) =>
    authRequired && !this.props.isAuthenticated ? <LoginComponent /> : <Component {...props} />;

  render() {
    const { isAuthenticated, initialRouteIndex } = this.props;
    return (
      <MemoryRouter initialEntries={routes} initialIndex={initialRouteIndex}>
        <React.Fragment>
          <div className="my-app-header">{isAuthenticated && <LogoutComponent />}</div>
          <Navigation isAuthenticated={isAuthenticated} />
          <div className="my-app-routes-wrapper">
            {routes.map(route => {
              const { exact, pathname, component, authRequired, additionalProps } = route;
              return (
                <Route
                  key={pathname}
                  exact={exact}
                  path={pathname}
                  render={routerProps =>
                    this.renderComponent(component, authRequired, {
                      ...routerProps,
                      ...additionalProps
                    })
                  }
                />
              );
            })}
          </div>
        </React.Fragment>
      </MemoryRouter>
    );
  }
}

Routes.propTypes = {
  isAuthenticated: PropTypes.bool,
  initialRouteIndex: PropTypes.number
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.authenticated
});

export default connect(mapStateToProps)(Routes);
