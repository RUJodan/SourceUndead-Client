import io from 'socket.io-client';
import Store from './store';

// action handlers
import * as CreateAccountHandler from './Actions/createAccount';
import * as LoginHandler from './Actions/login';

const socket = io('http://localhost:8080');

socket.on('create-account', payload => Store.dispatch(CreateAccountHandler.wsCreateAccountResponse(payload)));
socket.on('login', payload => Store.dispatch(LoginHandler.wsLoginResponse(payload)));

export default function socketEmit(address, payload) {
  socket.emit(address, payload);
}
