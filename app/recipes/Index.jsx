import React, { PropTypes, Component } from 'react'
import Flipper from 'APP/pagination/Flipper'

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
      <Flipper listId="recipes" fetch={actions.fetchRecipes} />
    )
  }
}

export default connect(
  () => ({}),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Index)
