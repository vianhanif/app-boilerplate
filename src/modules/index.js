import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  app: require('./app').default,
  router: routerReducer
});
