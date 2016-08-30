import api from 'ROOT/api'
import register from 'ROOT/pagination/actions'
import * as actionTypes from './actionTypes'

export default function fetchRecipes(pageInfo) {
  return dispatch => {
    dispatch({ type: actionTypes.FETCH_RECIPES })
    return api.recipes.index(pageInfo.query)
  }
}

const pageActions = register({
  listId: 'recipes',
  fetch: fetchRecipes,
  isBoundToDispatch: false
})

export function forceFetch() {
  return pageActions.reload
}

export function toggleActive(recipe) {
  return dispatch =>
    dispatch(
      pageActions.updateItem(
        recipe.get('id'),
        { active: !recipe.get('active') }
      )
    )
}

export function removeRecipe(recipe) {
  return dispatch =>
    dispatch(
      pageActions.removeItem(recipe.get('id'))
    )
}
