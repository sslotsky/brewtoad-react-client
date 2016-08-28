import Immutable, { Map } from 'immutable'
import { resolveAll } from 'LIB/reduxResolver'
import * as actionTypes from './actionTypes'

const initialState = Map({
  saving: false,
  user: Map(),
  serverErrors: Map()
})

export default resolveAll(initialState, (state, action) => ({
  [actionTypes.SUBMIT_NEW_USER]: () => state.merge({ saving: true }),
  [actionTypes.NEW_USER_CREATED]: () => state.merge({
    user: Map(action.user),
    saving: false,
    serverErrors: Map()
  }),
  [actionTypes.NEW_USER_CREATED_ERROR]: () => state.merge({
    saving: false,
    serverErrors: Immutable.fromJS(action.serverErrors)
  })
}))
