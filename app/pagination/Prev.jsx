import React, { PropTypes, Component } from 'react'
import paginate from './PaginationWrapper'

export function Prev({ actions }) {
  return (
    <a className="pure-button pure-button-primary" onClick={actions.prev}>
      {'<<'}
    </a>
  )
}

export default paginate(Prev)
