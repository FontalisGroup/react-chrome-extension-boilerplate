import React, { Component } from 'react';
import { MemoryRouter, Route } from 'react-router';
import { connect } from 'react-redux';
import LoginComponent from '../Login/LoginComponent';
import Navigation from '../../components/common/Navigation/Navigation';
import LogoutComponent from '../Login/LogoutComponent';
import { routes } from './routeConfig';

class Routes extends Component {
  renderComponent = (Component, authRequired, ...props) =>
    authRequired && !this.props.isAuthenticated ? <LoginComponent /> : <Component {...props} />;

  render() {
    const { isAuthenticated } = this.props;
    return (
      <MemoryRouter initialEntries={routes} initialIndex={this.props.initialRouteIndex}>
        <React.Fragment>
          <div className="my-app-header">{this.props.isAuthenticated && <LogoutComponent />}</div>
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
                    this.renderComponent(component, authRequired, routerProps, additionalProps)
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

const mapStateToProps = state => ({
  isAuthenticated: state.user.authenticated
});

export default connect(mapStateToProps)(Routes);
