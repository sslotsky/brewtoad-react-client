import React, { PropTypes, Component } from 'react'
import { register } from './actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const connector = connect(
  (state, ownProps) => ({
    paginator: state.pagination.find(p => p.get('id') === ownProps.listId)
  }),
  (dispatch, ownProps) => ({
    actions: bindActionCreators(register(ownProps), dispatch)
  })
)

export default function paginate(ComponentClass) {
  return connector(
    class extends Component {
      static propTypes = {
        actions: PropTypes.object.isRequired
      }

      componentDidMount() {
        this.props.actions.initialize()
      }

      render() {
        return <ComponentClass {...this.props} />
      }
    }
  )
}
