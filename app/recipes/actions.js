import api from 'APP/api'
import * as actionTypes from './actionTypes'

export default function fetchRecipes(pageInfo) {
  return dispatch => {
    dispatch({ type: actionTypes.FETCH_RECIPES })
    return api.recipes.index(pageInfo.query)
  }
}
