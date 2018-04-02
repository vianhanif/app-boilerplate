import React from 'react'
import { hydrate, render } from 'react-dom'
import { Provider } from 'react-redux'
import './assets/styling/css/index.css'
import Home from './pages/Home'
import store, { history } from './store'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker'

const rootElement = document.getElementById('root')
const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route exact path="/" component={Home}></Route>
      </ConnectedRouter>
    </Provider>
  )
}
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
registerServiceWorker()
