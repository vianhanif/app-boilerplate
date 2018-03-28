import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger'

const basicLogger = (store) => (next) => (action) => {
  // console.log('logged action', action)
  next(action)
}

const history = createHistory()

const store = createStore(
  combineReducers({
    app: require('./app').default,
    router: routerReducer
  }),
  applyMiddleware(
    routerMiddleware(history),
    basicLogger,
    logger
  )
)

store.subscribe(() => {
  // console.log('store updated! ', store.getState())
})

export {
  history
}

export default store
