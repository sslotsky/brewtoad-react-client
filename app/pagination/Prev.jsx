import React, { PropTypes, Component } from 'react'
import { Map } from 'immutable'
import { register } from './actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export class Prev extends Component {
  static propTypes = {
    listId: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    fetch: PropTypes.func.isRequired,
    paginator: PropTypes.object,
    resultsField: PropTypes.string,
    totalCountField: PropTypes.string
  }

  static defaultProps = {
    paginator: Map(),
    resultsField: 'results',
    totalCount: 'total_count'
  }

  componentDidMount() {
    this.props.actions.initialize()
  }

  nextPage() {
    this.props.actions.prev()
  }

  render() {
    return (
      <a className="pure-button pure-button-primary" onClick={::this.nextPage}>
        {'<<'}
      </a>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    paginator: state.pagination.find(p => p.get('id') === ownProps.listId)
  }),
  (dispatch, ownProps) => ({
    actions: bindActionCreators(register(ownProps), dispatch)
  })
)(Prev)

