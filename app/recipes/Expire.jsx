import React, { PropTypes } from 'react'
import { expireAll } from 'violet-paginator'
import { connect } from 'react-redux'

export function Expire({ expire }) {
  return (
    <button onClick={expire}>Expire All</button>
  )
}

Expire.propTypes = {
  expire: PropTypes.func.isRequired
}

export default connect(
  () => ({}),
  { expire: expireAll }
)(Expire)
