import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import NewUser from './users/New'

export default (
  <Route path="/" component={App}>
    <Route path="users/new" component={NewUser} />
  </Route>
)
