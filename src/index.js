import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './assets/scss/index.scss'
import Home from './pages/Home'
import store, { history } from './store'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path="/" component={Home}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
