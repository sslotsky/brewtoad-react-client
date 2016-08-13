import React from 'react'
import ReactDOM from 'react-dom'

import thunk from 'redux-thunk'
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import NewUser from './users/New'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render((
  <Provider store={store}>
    <div>
      <h2>Obey the toad</h2>
      <NewUser />
    </div>
  </Provider>
), document.getElementById('app'))
