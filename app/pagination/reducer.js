import Immutable, { Map, List } from 'immutable'
import { resolveEach, updateListItem } from 'LIB/reduxResolver'
import * as actionTypes from './actionTypes'

const initialState = List()

const defaultPaginator = Map({
  id: null,
  page: 1,
  pageSize: 15,
  totalCount: 0,
  isLoading: false,
  results: List(),
  loadError: null
})

function initialize(state, action) {
  if (state.some(p => p.get('id') === action.id)) {
    return state
  }

  return state.push(defaultPaginator.merge({ id: action.id }))
}

function next(state, action) {
  return updateListItem(state, action.id, p =>
    p.merge({ page: p.get('page') + 1 })
  )
}

function prev(state, action) {
  return updateListItem(state, action.id, p =>
    p.merge({ page: p.get('page') - 1 })
  )
}

function fetching(state, action) {
  return updateListItem(state, action.id, p =>
    p.merge({ isLoading: true })
  )
}

function updateResults(state, action) {
  return updateListItem(state, action.id, p =>
    p.merge({
      results: Immutable.fromJS(action.results),
      totalCount: action.totalCount,
      isLoading: false
    })
  )
}

function error(state, action) {
  return updateListItem(state, action.id, p =>
    p.merge({
      isLoading: false,
      loadError: action.error
    })
  )
}

export default resolveEach(initialState, {
  [actionTypes.INITIALIZE_PAGINATOR]: initialize,
  [actionTypes.PREVIOUS_PAGE]: prev,
  [actionTypes.NEXT_PAGE]: next,
  [actionTypes.FETCH_RECORDS]: fetching,
  [actionTypes.RESULTS_UPDATED]: updateResults,
  [actionTypes.RESULTS_UPDATED_ERROR]: error
})
