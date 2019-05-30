import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import auth component
import AuthComponent from './Components/Authentication';

// import pages
import CreateAccount from './Components/CreateAccount';
import Login from './Components/Login';

function AppRouter() {
  return (
    <Router>
      <Route exact path={['/', '/login']} component={Login} />
      <Route path="/create-account" render={() => <AuthComponent route={CreateAccount} />} />
    </Router>
  );
}

export default connect()(AppRouter);
