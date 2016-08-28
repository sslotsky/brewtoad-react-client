import React, { PropTypes, Component } from 'react'
import Flipper from 'ROOT/pagination/Flipper'
import DataTable from 'ROOT/pagination/DataTable'
import { connect } from 'react-redux'
import { I18n } from 'react-redux-i18n'

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
        {flipper}
        <DataTable listId="recipes" fetch={fetch} headers={this.headers()} />
        {flipper}
      </section>
    )
  }
}

export default connect(
  () => ({}),
  { fetch: fetchRecipes }
)(Index)
