import React, { PropTypes, Component } from 'react'
import paginate from './PaginationWrapper'

export function Prev({ actions, hasPreviousPage }) {
  return (
    <a
      className="pure-button pure-button-primary"
      onClick={actions.prev}
      disabled={!hasPreviousPage}
    >
      {'<<'}
    </a>
  )
}

export default paginate(Prev)
