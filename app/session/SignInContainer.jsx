import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import SignIn from './SignIn'

export class SignInContainer extends Component {
  render() {
    const { authenticate } = this.props
    const onSubmit = (data) => {
      authenticate(data.username, data.password)
    }

    return (
      <SignIn onSubmit={onSubmit} />
    )
  }
}

export default connect(
  () => ({}),
  { authenticate: actions.authenticate }
)(SignInContainer)
