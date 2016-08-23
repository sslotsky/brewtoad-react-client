import * as actionTypes from './actionTypes'

const defaultConfig = {
  results: 'results',
  totalCount: 'total_count'
}

const fetcher = customConfig =>
  (dispatch, getState) => {
    const config = { ...defaultConfig, ...customConfig }
    const id = config.listId
    const pageInfo = getState().pagination.find(p => p.get('id') === id)

    dispatch({ type: actionTypes.FETCH_RECORDS, id })

    /* Assumes config.fetch is already bound to dispatch:
     *
     * export default connect(
     *   (state, ownProps) => ({
     *     paginator: state.pagination.find(p => p.get('id') === ownProps.listId)
     *   }),
     *   (dispatch, ownProps) => ({
     *     actions: bindActionCreators(register(ownProps), dispatch)
     *   })
     * )(Next)
     */
    return config.fetch(pageInfo.toJS()).then(resp =>
      dispatch({
        type: actionTypes.RESULTS_UPDATED,
        results: resp.data[config.results],
        totalCount: resp.data[config.totalCount],
        id
      })
    ).catch(error =>
      dispatch({
        type: actionTypes.RESULTS_UPDATED_ERROR,
        error,
        id
      })
    )
  }

export function register(config) {
  const fetch = fetcher(config)
  const id = config.listId
  const execute = action => dispatch => {
    dispatch(action)
    return dispatch(fetch)
  }

  return {
    initialize: () => (dispatch, getState) => {
      const action = {
        type: actionTypes.INITIALIZE_PAGINATOR,
        id: config.listId
      }

      if (getState().pagination.some(p => p.get('id') === config.listId)) {
        dispatch(action)
      } else {
        dispatch(execute(action))
      }
    },
    next: () => dispatch =>
      dispatch(
        execute({
          type: actionTypes.NEXT_PAGE,
          id
        })
      ),
    prev: () => dispatch =>
      dispatch(
        execute({
          type: actionTypes.PREVIOUS_PAGE,
          id
        })
      ),
    toggleFilterItem: (field, value) => dispatch =>
      dispatch(
        execute({
          type: actionTypes.TOGGLE_FILTER_ITEM,
          id,
          field,
          value
        })
      )
  }
}
