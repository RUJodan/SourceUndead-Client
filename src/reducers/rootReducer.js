import { combineReducers } from 'redux';
import createAccount from './createAccount';
import login from './login';

export default combineReducers({
  createAccount,
  login,
});
