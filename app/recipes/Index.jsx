import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { I18n } from 'react-redux-i18n'
import { VioletFlipper, VioletDataTable, VioletPaginator, VioletPageSizeDropdown } from 'violet-paginator'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router'
import Expire from './Expire'
import * as things from 'violet-paginator'

import fetchRecipes, { forceFetch, toggleActive, removeRecipe, expireList } from './actions'

export class Index extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    expire: PropTypes.func.isRequired
  }

  activeColumn(recipe) {
    return (
      <input
        type="checkbox"
        checked={!!recipe.get('active')}
        onClick={() => this.props.toggle(recipe)}
      />
    )
  }

  nameColumn(recipe) {
    return (
      <Link to={`/recipes/${recipe.get('id')}`}>
        {recipe.get('name')}
      </Link>
    )
  }

  deleteRecipe(recipe) {
    return (
      <a onClick={() => this.props.remove(recipe)}>
        <FontAwesome name="remove" />
      </a>
    )
  }

  headers() {
    return [{
      field: 'name',
      text: I18n.t('recipes.name'),
      format: (recipe) => this.nameColumn(recipe)
    }, {
      field: 'created_at',
      text: I18n.t('recipes.created_at')
    }, {
      field: 'boil_time',
      sortable: false,
      text: I18n.t('recipes.boil_time')
    }, {
      field: 'active',
      sortable: false,
      text: 'Active',
      format: (recipe) => this.activeColumn(recipe)
    }, {
      field: 'delete',
      sortable: false,
      text: 'Delete',
      format: (recipe) => this.deleteRecipe(recipe)
    }]
  }

  expire() {
    this.props.expire()
  }

  render() {
    const { fetch } = this.props
    const flipper = (
      <VioletFlipper listId="recipes" fetch={fetch} />
    )

    return (
      <section>
        <Expire />
        <VioletPageSizeDropdown listId="recipes" fetch={fetch} />
        <VioletPaginator listId="recipes" fetch={fetch} />
        {flipper}
        <VioletDataTable listId="recipes" fetch={fetch} headers={this.headers()} />
        {flipper}
        <VioletPaginator listId="recipes" fetch={fetch} />
      </section>
    )
  }
}

export default connect(
  () => ({}),
  { fetch: fetchRecipes, toggle: toggleActive, remove: removeRecipe, expire: expireList }
)(Index)
