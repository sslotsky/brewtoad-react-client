import React, { PropTypes, Component } from 'react'
import paginate from './PaginationWrapper'
import { defaultPaginator } from './reducer'
import FontAwesome from 'react-fontawesome'

export function SortLink({ paginator, actions, field, text }) {
  const sort = () =>
    actions.sort(field, !paginator.get('sortReverse'))

  const arrow = paginator.get('sort') === field && (
    paginator.get('sortReverse') ? 'angle-up' : 'angle-down'
  ) || ''

  return (
    <a onClick={sort}>
      {text} <FontAwesome name={arrow} />
    </a>
  )
}

SortLink.defaultProps = {
  paginator: defaultPaginator
}

export default paginate(SortLink)

