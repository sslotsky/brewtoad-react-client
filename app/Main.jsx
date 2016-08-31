import React from 'react'
import ReactDOM from 'react-dom'

import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr'

import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'

import { loadTranslations, setLocale, syncTranslationWithStore, I18n } from 'react-redux-i18n'

import 'styles.scss'

import translations from 'CONF/locales'
import { setTranslator } from 'ROOT/shared/forms'
import { configurePageParams } from 'violet-paginator'

import reducers from './reducers'
import routes from './Routes'

configurePageParams({
  perPage: 'results_per_page',
  sortOrder: 'sort_reverse',
  sortReverse: true
})

const router = routerMiddleware(browserHistory)
const devtools = window.devToolsExtension ? window.devToolsExtension() : f => f
const store = createStore(
  reducers,
  compose(applyMiddleware(thunk, router), devtools)
)
const history = syncHistoryWithStore(browserHistory, store)

syncTranslationWithStore(store)
store.dispatch(loadTranslations(translations))
store.dispatch(setLocale('en')) // TODO: resolve dynamically
setTranslator(I18n)

ReactDOM.render((
  <Provider store={store}>
    <div>
      <ReduxToastr />
      <Router history={history}>
        {routes}
      </Router>
    </div>
  </Provider>
), document.getElementById('app'))
