import { replace } from 'react-router-redux'
import { toastr } from 'react-redux-toastr'
import api from 'APP/api'
import * as actionTypes from './actionTypes'

export function register(username, email, password) {
  return dispatch => {
    dispatch({ type: actionTypes.SUBMIT_NEW_USER })

    return api.users.create(username, email, password).then(resp => {
      dispatch(replace('/'))
      toastr.success('Saved!', `User ${resp.data.username} created!`)
      return dispatch({ type: actionTypes.NEW_USER_CREATED, user: resp.data })
    }).catch(error => {
      toastr.error('UserName or Email already taken')
      return dispatch({ type: actionTypes.NEW_USER_CREATED_ERROR, error: error })
    })
  }
}
