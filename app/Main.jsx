import React from 'react'
import ReactDOM from 'react-dom'

import thunk from 'redux-thunk'
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import routes from './Routes'

import '../styles.scss'

const router = routerMiddleware(browserHistory)
const store = createStore(reducers, applyMiddleware(thunk, router))
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
), document.getElementById('app'))
