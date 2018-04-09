import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import createHistory from 'history/createBrowserHistory';
import rootReducer from './modules';

export const history = createHistory();

const withLogger = [
  thunk,
  routerMiddleware(history),
  logger
];

const noLogger = [
  thunk,
  routerMiddleware(history)
]

const middleware = process.env.NODE_ENV === 'development' ? withLogger : noLogger

const store = createStore(
  rootReducer,
  (process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(...middleware)) :
  applyMiddleware(...middleware))
);

export default store;
