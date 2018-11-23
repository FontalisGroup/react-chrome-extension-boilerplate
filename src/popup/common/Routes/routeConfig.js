import HomePage from '../../Pages/HomePage/HomePage';
import DashboardPage from '../../Pages/DashboardPage/DashboardPage';
import AboutPage from '../../Pages/AboutPage/AboutPage';

const PAGES = {
  HOME_PAGE: '/home-page',
  DASHBOARD_PAGE: '/dashboard-page',
  ABOUT_PAGE: '/about-page'
};
const routes = [
  {
    pathname: PAGES.HOME_PAGE,
    authRequired: true,
    exact: true,
    component: HomePage
  },
  {
    pathname: PAGES.DASHBOARD_PAGE,
    authRequired: true,
    exact: true,
    component: DashboardPage
  },
  {
    pathname: PAGES.ABOUT_PAGE,
    authRequired: false,
    exact: true,
    component: AboutPage
  }
];

/**
 * Reason for separating nav from routes is because it often happens that we need to
 * redirect to some routes programmatically (e.g. with Redirect component), and we don't
 * actually want to display those routes in nav menu.
 */
const defaultNavigation = [
  {
    to: PAGES.HOME_PAGE,
    text: 'NAVIGATION.HOME_PAGE',
    authRequired: false
  },
  {
    to: PAGES.DASHBOARD_PAGE,
    text: 'NAVIGATION.DASHBOARD_PAGE',
    authRequired: true
  },
  {
    to: PAGES.ABOUT_PAGE,
    text: 'NAVIGATION.ABOUT_PAGE',
    authRequired: false
  }
];

export { routes, defaultNavigation };
