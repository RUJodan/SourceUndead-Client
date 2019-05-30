import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import { socket, socketEmit } from '../Websocket';

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

    socketEmit('authRoute', null);

    socket.on('unauthenticated', () => {
      const path = location.pathname;

      // if not authenticated, redirect to login by setting the auth to false
      if (path !== '/login' && path !== '/') {
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
    const { route } = this.props;
    let rendering = null;

    if (auth === true) {
      rendering = React.createElement(route, {});
    } else if (auth === false) {
      rendering = <Redirect to="login" />;
    }

    return rendering;
  }
}

AuthComponent.propTypes = {
  route: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(AuthComponent);
