import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import math from './math'
import app from './app'
import user from './user'

const basicLogger = (store) => (next) => (action) => {
  // console.log('logged action', action)
  next(action)
}

const store = createStore(
  combineReducers({
    math: require('./math').default,
    user: require('./user').default,
    app: require('./app').default
  }),
  applyMiddleware(
    basicLogger,
    logger
  )
)

store.subscribe(() => {
  // console.log('store updated! ', store.getState())
})

export default store