import api from 'ROOT/api'
import { composables } from 'violet-paginator'
import * as actionTypes from './actionTypes'

export default function fetchRecipes(pageInfo) {
  return dispatch => {
    dispatch({ type: actionTypes.FETCH_RECIPES })
    return api.recipes.index(pageInfo.query)
  }
}

export function fetchRecipe(id) {
  return () =>
    api.recipes.show(id).catch(() => {})
}

const pageActions = composables({
  listId: 'recipes',
  fetch: fetchRecipes
})

export function toggleActive(recipe) {
  const data = {
    active: !recipe.get('active')
  }

  return pageActions.updateAsync(
    recipe.get('id'),
    data,
    () => api.recipes.update(data)
  )
}

export function expireList() {
  return pageActions.expire()
}

export function removeRecipe(recipe) {
  return dispatch =>
    dispatch(
      pageActions.removeItem(recipe.get('id'))
    )
}
