import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import auth component
import AuthComponent from './Components/Authentication';

// import pages
import CreateAccount from './Components/CreateAccount';
import Login from './Components/Login';
import Index from './Components';

function AppRouter() {
  return (
    <Router>
      <Route path="/login" render={() => <AuthComponent route={Login} />} />
      <Route path="/create-account" render={() => <AuthComponent route={CreateAccount} />} />
      <Route exact path="/" render={() => <AuthComponent route={Index} />} />
    </Router>
  );
}

export default connect()(AppRouter);
