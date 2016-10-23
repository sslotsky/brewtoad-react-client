import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import authenticate from './actions'
import SignIn from './SignIn'

export function SignInContainer({ login }) {
  const onSubmit = (data) => {
    login(data.username, data.password)
  }

  return (
    <SignIn onSubmit={onSubmit} />
  )
}

SignInContainer.propTypes = {
  login: PropTypes.func.isRequired
}

export default connect(
  () => ({}),
  { login: authenticate }
)(SignInContainer)
