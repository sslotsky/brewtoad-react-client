import { List } from 'immutable'
import React from 'react'
import { Input, SaveButton, Form } from 'ROOT/shared/forms'
import { I18n } from 'react-redux-i18n'
import { reduxForm } from 'redux-form'

export function SignIn(props) {
  const { fields, authenticate, handleSubmit, ...rest } = props

  return (
    <Form
      handleSubmit={handleSubmit}
      serverErrors={List()}
      className="pure-form pure-form-stacked pure-form-brewed"
    >
      <Input
        field={fields.username}
        placeholder={I18n.t('sign_in.username')}
      />
      <Input
        type="password"
        field={fields.password}
        placeholder={I18n.t('sign_in.password')}
      />
      <SaveButton {...rest} label={I18n.t('sign_in.submit')} />
    </Form>
  );
}

export default reduxForm({
  form: 'sign-in',
  fields: [
    'username',
    'password'
  ]
})(SignIn)
