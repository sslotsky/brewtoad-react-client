import React, { PropTypes, Component } from 'react'
import Flipper from 'APP/pagination/Flipper'
import SortLink from 'APP/pagination/SortLink'

import * as actions from './actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class Index extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  render() {
    const { actions } = this.props

    return (
      <div>
        <SortLink
          listId="recipes"
          fetch={actions.fetchRecipes}
          field='name'
          text='Name'
        />
        <Flipper listId="recipes" fetch={actions.fetchRecipes} />
      </div>
    )
  }
}

export default connect(
  () => ({}),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Index)
