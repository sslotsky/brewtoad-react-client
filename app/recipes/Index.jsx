import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { I18n } from 'react-redux-i18n'
import {
  VioletFlipper,
  VioletDataTable,
  VioletPaginator,
  VioletPageSizeDropdown
} from 'violet-paginator'
import { Link } from 'react-router'

import fetchRecipes from './actions'

export class Index extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired
  }

  nameColumn(recipe) {
    return (
      <Link to={`/recipes/${recipe.get('id')}`}>
        {recipe.get('name')}
      </Link>
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
    }]
  }

  render() {
    const { fetch } = this.props
    const flipper = (
      <VioletFlipper listId="recipes" fetch={fetch} />
    )

    return (
      <section>
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
  { fetch: fetchRecipes }
)(Index)
