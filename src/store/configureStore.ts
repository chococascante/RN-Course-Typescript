import {createStore, applyMiddleware, Store} from 'redux';
import thunk from 'redux-thunk';

import {combineReducers, compose} from 'redux';
import * as reducers from './reducers';

const createRootReducer = () =>
  combineReducers({
    ...reducers,
  });

export default function configureStore(): Store {
  const store = createStore(
    createRootReducer(), // root reducer with router state
    compose(applyMiddleware(thunk)),
  );
  return store;
}
