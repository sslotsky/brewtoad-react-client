import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { I18n } from 'react-redux-i18n'
import Flipper from 'ROOT/pagination/Flipper'
import DataTable from 'ROOT/pagination/DataTable'
import Paginator from 'ROOT/pagination/Paginator'

import fetchRecipes from './actions'

export class Index extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired
  }

  headers() {
    return [{
      field: 'name',
      text: I18n.t('recipes.name')
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
      <Flipper listId="recipes" fetch={fetch} />
    )

    return (
      <section>
        <Paginator listId="recipes" fetch={fetch} />
        {flipper}
        <DataTable listId="recipes" fetch={fetch} headers={this.headers()} />
        {flipper}
        <Paginator listId="recipes" fetch={fetch} />
      </section>
    )
  }
}

export default connect(
  () => ({}),
  { fetch: fetchRecipes }
)(Index)
