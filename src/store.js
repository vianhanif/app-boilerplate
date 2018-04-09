import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import createHistory from 'history/createBrowserHistory';
import rootReducer from './modules';

export const history = createHistory();

const middleware = [
  thunk,
  routerMiddleware(history),
  logger
];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;
