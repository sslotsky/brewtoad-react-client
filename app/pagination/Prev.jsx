import React, { PropTypes, Component } from 'react'
import paginate from './PaginationWrapper'

export class Prev extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  render() {
    const { actions: { prev } } = this.props

    return (
      <a className="pure-button pure-button-primary" onClick={prev}>
        {'<<'}
      </a>
    )
  }
}

export default paginate(Prev)
