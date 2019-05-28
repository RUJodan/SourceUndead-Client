import React from 'react';
import PropTypes from 'prop-types';
import Login from './Login';

export async function isLoggedIn() {
  const response = await fetch('/isLoggedIn', {
    credentials: 'include',
  });
  const authenticated = await response.json();
  return authenticated.loggedIn;
}

export default class AuthComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: null,
    };
  }

  componentDidMount() {
    this.authorize();
  }

  async authorize() {
    const auth = await isLoggedIn();
    this.setState({
      auth,
    });
  }

  render() {
    const { auth } = this.state;
    const { route } = this.props;
    let rendering = null;

    if (auth === true) {
      rendering = React.createElement(route, {});
    } else if (auth === false) {
      rendering = <Login />;
    }

    return (
      <div>
        {rendering}
      </div>
    );
  }
}

AuthComponent.propTypes = {
  route: PropTypes.string.isRequired,
};
