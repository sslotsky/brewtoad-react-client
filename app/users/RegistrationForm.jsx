import React, { PropTypes, Component } from 'react'
import { Input, SaveButton, buildErrors } from 'APP/shared/forms'
import { I18n } from 'react-redux-i18n'
import { reduxForm } from 'redux-form'

class Form extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  label(field) {
    return I18n.t(`users.form.${field.name}`)
  }

  render() {
    const {
      handleSubmit,
      fields: {
        username,
        email,
        password,
        password_confirmation
      }
    } = this.props

    return (
      <form onSubmit={handleSubmit} className="pure-form pure-form-stacked pure-form-brewed">
        <Input field={username} placeholder={this.label(username)} />
        <Input field={email} placeholder={this.label(email)} />
        <Input field={password} type="password" placeholder={this.label(password)} />
        <Input field={password_confirmation} type="password" placeholder={this.label(password_confirmation)} />
        <SaveButton {...this.props} label={I18n.t('users.form.register')} />
      </form>
    )
  }
}

function validate(values) {
  return buildErrors(values, v => {
    v.require('username', 'email', 'password', 'password_confirmation'),
    v.email('email'),
    v.matchesField('password_confirmation', 'password', 'users.form.validation.password_confirmation.matches')
  });
}

export default reduxForm({
  form: 'user-registration',
  fields: [
    'username',
    'email',
    'password',
    'password_confirmation'
  ],
  validate
})(Form)
