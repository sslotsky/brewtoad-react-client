import React, { PropTypes, Component } from 'react'
import paginate from './PaginationWrapper'

export function Next({ actions }) {
  return (
    <a className="pure-button pure-button-primary" onClick={actions.next}>
      {'>>'}
    </a>
  )
}

export default paginate(Next)
