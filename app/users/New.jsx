import React, { PropTypes, Component } from 'react'
import Form from './RegistrationForm'
import { connect } from 'react-redux'
import * as actions from './actions'

export class New extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  submit(data) {
    this.props.create(data.username, data.email, data.password)
  }

  render() {
    return (
      <div>
        <Form
          {...this.props}
          initialValues={this.props.user.toJS()}
          onSubmit={::this.submit}
        />
      </div>
    )
  }
}

export default connect(
  state => ({
    user: state.users.get('user'),
    serverErrors: state.users.get('serverErrors')
  }),
  { create: actions.register }
)(New)
