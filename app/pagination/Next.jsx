import React, { PropTypes, Component } from 'react'
import paginate from './PaginationWrapper'

export function Next({ actions, hasNextPage }) {
  const next = <span>→</span>
  const link = hasNextPage ? (
    <a onClick={actions.next}>{next}</a>
  ) : next

  return link
}

export default paginate(Next)
