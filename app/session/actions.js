import { push } from 'react-router-redux'
import { toastr } from 'react-redux-toastr'
import api from 'ROOT/api'
import * as actionTypes from './actionTypes'

export default function authenticate(username, password) {
  return dispatch => {
    dispatch({ type: actionTypes.AUTHENTICATE })

    return api.sessions.create(username, password).then(resp => {
      // store the refresh token
      dispatch(push('/recipes'))
      toastr.success('Authenticated')
      return dispatch({
        type: actionTypes.AUTHENTICATED,
        refresh: resp.data.refresh_token
      })
    }).catch(error => {
      toastr.error('Could not authenticate!')
      return dispatch({
        type: actionTypes.AUTH_ERROR,
        error
      })
    })
  }
}
