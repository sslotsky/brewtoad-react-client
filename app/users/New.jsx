import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Form from './RegistrationForm'
import register from './actions'

export class New extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    create: PropTypes.func.isRequired
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
          onSubmit={(data) => this.submit(data)}
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
  { create: register }
)(New)
