import { Map } from 'immutable'
import * as actionTypes from './actionTypes'
import { resolveAll } from '../../lib/reduxResolver'

const initialState = Map({
  saving: false,
  user: Map(),
  error: null
})

export default resolveAll(initialState, (state, action) => ({
  [actionTypes.SUBMIT_NEW_USER]: () => state.merge({ saving: true }),
  [actionTypes.NEW_USER_CREATED]: () => state.merge({
    user: Map(action.user),
    saving: false
  }),
  [actionTypes.NEW_USER_CREATED_ERROR]: () => state.merge({
    saving: false,
    error: action.error
  })
}))
