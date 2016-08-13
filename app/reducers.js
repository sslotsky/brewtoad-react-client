import users from './users/reducer'
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

export default combineReducers({
  users,
  routing: routerReducer
})
