import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

const basicLogger = (store) => (next) => (action) => {
  // console.log('logged action', action)
  next(action)
}

const store = createStore(
  combineReducers({
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
