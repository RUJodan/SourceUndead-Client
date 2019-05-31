import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import { socket, socketEmit } from '../Websocket';
import Login from './Login';
import CreateAccount from './CreateAccount';

class AuthComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: null,
    };
  }

  componentDidMount() {
    // handle unauthenticated from server
    const { location } = this.props;

    socketEmit('authRoute');

    socket.on('unauthenticated', () => {
      const path = location.pathname;

      // if not authenticated, redirect to login by setting the auth to false
      if (path !== '/login' && path !== '/create-account') {
        this.setState({
          auth: false,
        });
      }
    });

    socket.on('authenticated', () => {
      this.setState({
        auth: true,
      });
    });
  }

  componentWillUnmount() {
    socket.off('unauthenticated');
    socket.off('authenticated');
  }

  render() {
    const { auth } = this.state;
    const { route, location } = this.props;
    const path = location.pathname;
    let rendering = <Login />;

    if (auth === true) {
      // these 2 routes do not need to be accessed when a user is logged in
      if (path === '/login' || path === '/create-account') {
        rendering = <Redirect to="" />;
      } else {
        // render original component
        rendering = React.createElement(route, {});
      }
    } else if (auth === false) {
      // redirect to login
      rendering = <Redirect to="login" />;
    } else if (path === '/create-account') {
      rendering = <CreateAccount />;
    }

    return rendering;
  }
}

AuthComponent.propTypes = {
  route: PropTypes.PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({}),
  ]).isRequired,
  location: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(AuthComponent);
