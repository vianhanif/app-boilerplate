import React from 'react'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom'
import store, { history } from '../../../store'

export default ({ component }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route component={component}/>
      </ConnectedRouter>
    </Provider>
  )
}
