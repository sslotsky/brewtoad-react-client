import emailValidator from 'email-validator'

import 'babel-regenerator-runtime'

function* required(value) {
  if (!value) {
    yield 'Required'
  }
}

function* email(value) {
  if (value && !emailValidator.validate(value)) {
    yield 'Please enter a valid email address'
  }
}

function matches(fieldName, message = 'Does not match') {
  return function* matchesField(value, data) {
    if (data && value && value !== data[fieldName]) {
      yield message
    }
  }
}

function validate(value, data, handler, ...rules) {
  const messages = rules.reduce(
    (allErrors, rule) => allErrors.concat(...rule(value, data)),
    []
  )

  if (messages.length) {
    handler(messages)
  }
}
export function buildErrors(values, validations) {
  const errors = {}

  function validateFields(rule, ...fields) {
    fields.forEach(fieldName => {
      validate(values[fieldName], values, messages => {
        errors[fieldName] = (errors[fieldName] || []).concat(messages)
      }, rule)
    })
  }

  const validator = {
    require: (...fields) => validateFields(required, ...fields),
    email: (...fields) => validateFields(email, ...fields),
    matchesField: (field, otherField, message) => validateFields(matches(otherField, message), field),
    validateChild: (name, childValidations) => {
      errors[name] = buildErrors(values[name], childValidations)
    },
    validateChildren: (name, childValidations) => {
      errors[name] = values[name].map(v => buildErrors(v, childValidations))
    }
  }

  validations(validator)

  return errors
}
