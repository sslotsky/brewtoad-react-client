import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'

export default class FormField extends Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
    label: PropTypes.string
  }

  static defaultProps = {
    label: ''
  }

  render() {
    const { field, label, children } = this.props
    const displayError = field.touched && !field.valid
    const classes = classnames('form-group', { 'has-error': displayError })
    const labelTag = label ? (
      <label for={field.name}>label</label>
    ) : false
    const child = React.cloneElement(children, { id: field.name })
    const error = displayError ? (
      <ul>
        {
          field.error.map((e, i) => (
            <li key={`error-${i}`}>{e}</li>
          ))
        }
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

