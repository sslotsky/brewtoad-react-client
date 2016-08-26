import React, { PropTypes, Component } from 'react'
import paginate from './PaginationWrapper'

export function Prev({ actions, hasPreviousPage }) {
  const prev = <span>←</span>
  const link = hasPreviousPage ? (
    <a onClick={actions.prev}>{prev}</a>
  ) : prev

  return link
}

export default paginate(Prev)
