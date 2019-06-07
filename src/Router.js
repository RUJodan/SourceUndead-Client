import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuSidebar from './Components/MenuSidebar';

// import auth component
import AuthComponent from './Components/Authentication';

// import pages
import Index from './Components';
import CreateAccount from './Components/CreateAccount';
import Login from './Components/Login';
import Lobby from './Components/Lobby';

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <MenuSidebar />,
    main: () => <AuthComponent route={Index} />,
  }, {
    path: '/login',
    main: () => <AuthComponent route={Login} />,
  }, {
    path: '/create-account',
    main: () => <AuthComponent route={CreateAccount} />,
  }, {
    path: '/lobby',
    exact: true,
    sidebar: () => <MenuSidebar />,
    main: () => <AuthComponent route={Lobby} />,
  },
];

function AppRouter() {
  const sidebarRoutes = routes.map(route => (
    <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      component={route.sidebar}
    />
  ));

  const mainRoutes = routes.map(route => (
    <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      component={route.main}
    />
  ));
  return (
    <div className="wrapper">
      <Router>
        {sidebarRoutes}
        {mainRoutes}
      </Router>
    </div>
  );
}

export default connect()(AppRouter);
