import React, { PropTypes, Component } from 'react'
import paginate from './PaginationWrapper'

export function Next({ actions, hasNextPage }) {
  return (
    <a
      className="pure-button pure-button-primary"
      onClick={actions.next}
      disabled={!hasNextPage}
    >
      {'>>'}
    </a>
  )
}

export default paginate(Next)
