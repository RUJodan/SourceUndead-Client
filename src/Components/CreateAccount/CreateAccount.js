import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RESET_CREATE_ACCOUNT_PAGE, requestAccount } from '../../Actions/createAccount';
import { socketEmit } from '../../Websocket';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
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
      email,
    } = this.state;

    const {
      errorClass,
      message,
    } = this.props;

    return (
      <div className="content">
        <h2 className="title">SourceUndead :: Create an Account</h2>
        <div className="container">
          <div className={errorClass}>{message}</div>
          <form>
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
                <label htmlFor="email">
                  Email Address
                  <input onChange={this.formChange} value={email} className="u-full-width" name="email" type="email" placeholder="Email Address" />
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
                    Have an account?&nbsp;
                    <Link to="/login">
                      Login
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

CreateAccount.propTypes = {
  submit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  errorClass: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const {
    message,
    errorClass,
  } = state.createAccount;

  return { message, errorClass };
};

const mapDispatchToProps = dispatch => ({
  // dispatching plain actions
  submit: (state) => {
    socketEmit('create-account', state);
    dispatch(requestAccount());
  },
  reset: () => dispatch({ type: RESET_CREATE_ACCOUNT_PAGE }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
