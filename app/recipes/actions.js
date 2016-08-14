import * as actionTypes from './actionTypes'
import api from '../api'

export function fetchRecipes(pageInfo) {
  return dispatch => {
    dispatch({ type: actionTypes.FETCH_RECIPES })
    return api.recipes.index({ page: pageInfo.page, results_per_page: pageInfo.pageSize });
  }
}
