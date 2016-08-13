import React, { PropTypes, Component } from 'react'
import Form from './RegistrationForm'
import { connect } from 'react-redux'
import * as actions from './actions'

export class New extends Component {
  submit(data) {
    console.log(data)
    //this.props.create(this.username.value, this.email.value, this.password.value)
  }

  render() {
    return (
      <div>
        <Form onSubmit={::this.submit} />
      </div>
    )
  }
}

export default connect(
  () => ({}),
  { create: actions.register }
)(New)
