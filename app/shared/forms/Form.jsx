import React, { PropTypes } from 'react'
import { Map, List } from 'immutable'

export default function Form({
  handleSubmit,
  children,
  className='',
  serverErrors = Map(),
  translationPrefix = ''
}) {
  const extendedChildren = children.map((c, i) =>
    React.cloneElement(c, { key: i, serverErrors, translationPrefix })
  )

  return (
    <form onSubmit={handleSubmit} className={className}>
      {extendedChildren}
    </form>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
  serverErrors: PropTypes.instanceOf(List),
  translationPrefix: PropTypes.string
}
