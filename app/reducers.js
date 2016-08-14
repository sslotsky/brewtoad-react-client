import users from './users/reducer'
import pagination from './pagination/reducer'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import { reducer as toastr } from 'react-redux-toastr'
import { combineReducers } from 'redux'

export default combineReducers({
  users,
  pagination,
  routing,
  toastr,
  form
})
