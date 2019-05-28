import React from 'react';
import { connect } from 'react-redux';
import CreateAccount from './CreateAccount';

function App() {
  return (
    <CreateAccount />
  );
}

export default connect()(App);
