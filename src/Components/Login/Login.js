import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RESET_LOGIN_PAGE, loginRequest } from '../../Actions/login';
import { socketEmit } from '../../Websocket';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.formChange = this.formChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    const { reset } = this.props;
    reset();
  }

  formChange(event) {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { submit } = this.props;

    submit(this.state);
  }

  render() {
    const {
      username,
      password,
    } = this.state;

    const {
      errorClass,
      message,
    } = this.props;

    return (
      <div>
        <h2 className="title">SourceUndead</h2>
        <div className="container">
          <form>
            <div className={errorClass}>{message}</div>
            <div className="row">
              <div className="twelve columns">
                <label htmlFor="name">
                  Username
                  <input onChange={this.formChange} value={username} className="u-full-width" name="username" type="text" placeholder="Username" />
                </label>
              </div>
            </div>

            <div className="row">
              <div className="twelve columns">
                <label htmlFor="password">
                  Password
                  <input onChange={this.formChange} value={password} className="u-full-width" name="password" type="password" placeholder="Password" />
                </label>
              </div>
            </div>

            <div className="row">
              <div className="twelve columns">
                <button onClick={this.handleSubmit} type="submit" className="u-full-width button">Submit</button>
              </div>
            </div>

            <div className="row">
              <div className="twelve columns">
                <div className="u-full-width">
                  <small>
                    Don&apos;t have an account?&nbsp;
                    <Link to="/create-account">
                      Create Account
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  submit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  errorClass: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const {
    message,
    errorClass,
  } = state.login;

  return { message, errorClass };
};

const mapDispatchToProps = dispatch => ({
  // dispatching plain actions
  submit: (state) => {
    socketEmit('login', state);
    return dispatch(loginRequest(state));
  },
  reset: () => dispatch({ type: RESET_LOGIN_PAGE }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
