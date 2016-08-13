import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

export class New extends Component {
  submit() {
    this.props.create(this.username.value, this.email.value, this.password.value)
  }

  render() {
    return (
      <div>
        <input placeholder="UserName" type="text" ref={(node) => this.username = node} />
        <input placeholder="Email" type="text" ref={(node) => this.email = node} />
        <input type="password" placeholder="Password" ref={(node) => this.password = node} />
        <button className="pure-button" onClick={::this.submit}>Register</button>
      </div>
    )
  }
}

export default connect(
  () => ({}),
  { create: actions.register }
)(New)
