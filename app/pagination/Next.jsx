import React, { PropTypes, Component } from 'react'
import paginate from './PaginationWrapper'

export class Next extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  render() {
    const { actions: { next } } = this.props

    return (
      <a className="pure-button pure-button-primary" onClick={next}>
        {'>>'}
      </a>
    )
  }
}

export default paginate(Next)
