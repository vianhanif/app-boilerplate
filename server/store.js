import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import createHistory from 'history/createMemoryHistory';
import rootReducer from '../src/modules';

// Create a store and history based on a path
const createServerStore = (path = '/') => {

  // We don't have a DOM, so let's create some fake history and push the current path
  const history = createHistory({ initialEntries: [path] });

  // All the middlewares
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

  // Store it all
  const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
  );

  // Return all that I need
  return {
    history,
    store
  };
};

export default createServerStore;
