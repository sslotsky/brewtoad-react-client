import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import { reducer as toastr } from 'react-redux-toastr'
import { i18nReducer } from 'react-redux-i18n'
import { combineReducers } from 'redux'

import users from './users/reducer'
import pagination from './pagination/reducer'

export default combineReducers({
  users,
  pagination,
  routing,
  toastr,
  form,
  i18n: i18nReducer
})
