import { replace } from 'react-router-redux'
import api from '../api'
import * as actionTypes from './actionTypes'

export function register(username, email, password) {
  return dispatch => {
    dispatch({ type: actionTypes.SUBMIT_NEW_USER })

    return api.users.create(username, email, password).then(resp => {
      dispatch(replace('/'))
      return dispatch({ type: actionTypes.NEW_USER_CREATED, user: resp.data })
    }).catch(error =>
      dispatch({ type: actionTypes.NEW_USER_CREATED_ERROR, error: error })
    )
  }
}
