import api from 'ROOT/api'
import { composables } from 'violet-paginator'
import * as actionTypes from './actionTypes'

export default function fetchRecipes(pageInfo) {
  return dispatch => {
    dispatch({ type: actionTypes.FETCH_RECIPES })
    return api.recipes.index(pageInfo.query)
  }
}

const pageActions = composables({
  listId: 'recipes',
  fetch: fetchRecipes
})

export function forceFetch() {
  return pageActions.reload()
}

export function expireList() {
  return pageActions.expire()
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
