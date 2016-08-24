import * as actionTypes from './actionTypes'
import api from 'APP/api'

export function fetchRecipes(pageInfo) {
  return dispatch => {
    dispatch({ type: actionTypes.FETCH_RECIPES })
    return api.recipes.index(pageInfo.query);
  }
}
