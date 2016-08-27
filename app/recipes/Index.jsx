import React, { PropTypes, Component } from 'react'
import Flipper from 'APP/pagination/Flipper'
import SortLink from 'APP/pagination/SortLink'
import DataTable from 'APP/pagination/DataTable'

import * as actions from './actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { I18n } from 'react-redux-i18n'

export class Index extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  headers() {
    return [{
      field: 'name',
      text: I18n.t('recipes.name')
    }, {
      field: 'boil_time',
      text: I18n.t('recipes.boil_time')
    }]
  }

  render() {
    const { actions } = this.props
    const flipper = (
      <Flipper listId="recipes" fetch={actions.fetchRecipes} />
    )

    return (
      <section>
        {flipper}
        <DataTable listId="recipes" fetch={actions.fetchRecipes} headers={this.headers()} />
        {flipper}
      </section>
    )
  }
}

export default connect(
  () => ({}),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Index)
