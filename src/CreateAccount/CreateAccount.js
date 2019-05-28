import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import createAccount from '../actions/createAccount';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
    };

    this.formChange = this.formChange.bind(this);
  }

  formChange(event) {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      username,
      password,
      email,
    } = this.state;

    const {
      submit,
      errorClass,
      message,
    } = this.props;

    return (
      <div>
        <h2 className="title">SourceUndead :: Create an Account</h2>
        <div className={errorClass}>{message}</div>
        <div className="container">
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
                <button onClick={e => submit(e, this.state)} type="submit" className="u-full-width button">Submit</button>
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
  submit: (event, state) => dispatch(createAccount(event, state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
