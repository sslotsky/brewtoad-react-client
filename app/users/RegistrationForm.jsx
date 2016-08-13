import React, { PropTypes, Component } from 'react'
import { Input } from '../shared/forms'
import { reduxForm } from 'redux-form'
import emailValidator from 'email-validator'

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
        <input type="password" placeholder="Password" ref={(node) => this.password = node} />
        <input
          type="submit"
          className="pure-button pure-button-primary"
          value="Register"
        />
      </form>
    )
  }
}

function validate(values) {
  const errors = {};
  if (!emailValidator.validate(values.email)) {
    errors.email = "Please enter a valid email address"
  }

  return errors;
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
