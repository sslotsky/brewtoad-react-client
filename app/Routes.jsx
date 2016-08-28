import React from 'react'
import { Route } from 'react-router'

import App from './App'
import NewUser from './users/New'
import Recipes from './recipes/Index'

export default (
  <Route path="/" component={App}>
    <Route path="users/new" component={NewUser} />
    <Route path="recipes" component={Recipes} />
  </Route>
)
