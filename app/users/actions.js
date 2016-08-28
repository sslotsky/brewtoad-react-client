import { replace } from 'react-router-redux'
import { toastr } from 'react-redux-toastr'
import api from 'ROOT/api'
import * as actionTypes from './actionTypes'

export default function register(username, email, password) {
  return dispatch => {
    dispatch({ type: actionTypes.SUBMIT_NEW_USER })

    return api.users.create(username, email, password).then(resp => {
      dispatch(replace('/'))
      toastr.success('Saved!', `User ${resp.data.username} created!`)
      return dispatch({ type: actionTypes.NEW_USER_CREATED, user: resp.data })
    }).catch(error => {
      toastr.error('Could not create user!')
      return dispatch({
        type: actionTypes.NEW_USER_CREATED_ERROR,
        serverErrors: error.response.data.errors
      })
    })
  }
}
