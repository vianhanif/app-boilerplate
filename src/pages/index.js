import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Page404 from './404'

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route component={Page404} />
  </Switch>
);
