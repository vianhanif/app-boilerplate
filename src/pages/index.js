import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Meta } from '../shared/components'
import Home from './Home'
import About from './About'
import Page404 from './404'

export default () => (
  <Switch>
    <Route exact path="/" render={props =>
        <Meta
          id="homepage"
          title="Home Page">
          <Home/>
        </Meta>
      } />

    <Route path="/about" render={props =>
        <Meta
          id="aboutpage"
          title="About Page">
          <About/>
        </Meta>
      } />

    <Route render={props =>
        <Meta
          id="not-found"
          title="404 Page">
          <Page404/>
        </Meta>
      } />
  </Switch>
);
