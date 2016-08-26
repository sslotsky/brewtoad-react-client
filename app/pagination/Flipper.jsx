import React, { PropTypes, Component } from 'react'
import classNames from 'classnames'
import paginate from './PaginationWrapper'
import { Prev } from './Prev'
import { Next } from './Next'

export function Flipper(props) {
  const prevClasses = classNames({ disabled: !props.hasPreviousPage })
  const nextClasses = classNames({ disabled: !props.hasNextPage })

  return (
    <ul className="pagination">
      <li className={prevClasses}>
        <Prev {...props} />
      </li>
      <li className={nextClasses}>
        <Next {...props} />
      </li>
    </ul>
  )
}

export default paginate(Flipper)
