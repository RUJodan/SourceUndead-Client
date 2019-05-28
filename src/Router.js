import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import Login from './Login';

function AppRouter() {
  return (
    <Router>
      <Route exact path={['/', '/login']} component={Login} />
      <Route path="/create-account" component={CreateAccount} />
    </Router>
  );
}

export default connect()(AppRouter);
