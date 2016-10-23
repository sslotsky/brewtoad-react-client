import React from 'react'
import { Route } from 'react-router'

import App from './App'
import NewUser from './users/New'
import Recipes from './recipes/Index'
import Recipe from './recipes/Show'
import SignIn from './session/SignInContainer'

export default (
  <Route path="/" component={App}>
    <Route path="users/new" component={NewUser} />
    <Route path="session/new" component={SignIn} />
    <Route path="recipes" component={Recipes} />
    <Route path="recipes/:id" component={Recipe} />
  </Route>
)
