import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/rootReducer';

function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk),
  );
}

const Store = configureStore();

export default Store;
