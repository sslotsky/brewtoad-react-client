import React, { PropTypes, Component } from 'react'
import { t } from './index'
import classnames from 'classnames'

export default class FormField extends Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
    label: PropTypes.string,
    translationPrefix: PropTypes.string
  }

  static defaultProps = {
    label: ''
  }

  displayError() {
    const { field, serverErrors } = this.props
    return field.touched && !field.valid || serverErrors.get(field.name)
  }

  serverErrors() {
    const { field, serverErrors, translationPrefix } = this.props
    const fieldErrors = serverErrors.get(field.name)
    const prefix = translationPrefix && `${translationPrefix}.`
    return fieldErrors && fieldErrors.map((e,i) =>
      <li key={`server-error-${i}`}>
        {t(`${prefix}validation.${field.name}.${e}`)}
      </li>
    )
  }

  clientErrors() {
    const { field } = this.props
    return field.touched && !field.valid && field.error.map((e, i) =>
      <li key={`client-error-${i}`}>{t(e)}</li>
    )
  }

  render() {
    const { field, label, children } = this.props
    const classes = classnames('form-group', { 'has-error': this.displayError() })
    const labelTag = label ? (
      <label for={field.name}>label</label>
    ) : false
    const child = React.cloneElement(children, { id: field.name })
    const error = this.displayError() ? (
      <ul>
        {this.clientErrors()}
        {this.serverErrors()}
      </ul>
    ) : false

    return (
      <div className={classes}>
        {labelTag}
        {child}
        {error}
      </div>
    )
  }
}

