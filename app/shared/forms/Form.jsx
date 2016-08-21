import React from 'react'
import { Map } from 'immutable'

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

