import React, { PropTypes, Component } from 'react'
import { Input, SaveButton, buildErrors } from '../shared/forms'
import { reduxForm } from 'redux-form'

class Form extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  render() {
    const {
      handleSubmit,
      fields: {
        username,
        email,
        password,
        passwordConfirmation
      }
    } = this.props

    return (
      <form onSubmit={handleSubmit} className="pure-form pure-form-stacked pure-form-brewed">
        <Input field={username} placeholder="UserName" />
        <Input field={email} placeholder="Email" />
        <Input field={password} type="password" placeholder="Password" />
        <Input field={passwordConfirmation} type="password" placeholder="Confirm Password" />
        <SaveButton {...this.props} label="Register" />
      </form>
    )
  }
}

function validate(values) {
  return buildErrors(values, v => {
    v.require('username', 'email', 'password', 'passwordConfirmation'),
    v.email('email'),
    v.matchesField('passwordConfirmation', 'password', 'Does not match Password')
  });
}

export default reduxForm({
  form: 'user-registration',
  fields: [
    'username',
    'email',
    'password',
    'passwordConfirmation'
  ],
  validate
})(Form)
