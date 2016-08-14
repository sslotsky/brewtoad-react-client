import React, { PropTypes, Component } from 'react'
import Next from '../pagination/Next'
import Prev from '../pagination/Prev'

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
        <Prev
          listId="recipes"
          fetch={actions.fetchRecipes}
        />
        <Next
          listId="recipes"
          fetch={actions.fetchRecipes}
        />
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
