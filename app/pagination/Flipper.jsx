import React, { PropTypes, Component } from 'react'
import paginate from './PaginationWrapper'
import { Prev } from './Prev'
import { Next } from './Next'

export function Flipper(props) {
  return (
    <div>
      <Prev {...props} />
      <Next {...props} />
    </div>
  )
}

export default paginate(Flipper)
