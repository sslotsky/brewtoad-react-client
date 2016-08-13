import users from './users/reducer'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import { combineReducers } from 'redux'

export default combineReducers({
  users,
  routing,
  form
})
