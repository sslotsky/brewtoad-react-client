import React, { PropTypes, Component } from 'react'
import FormField from './FormField'
import domProps from './domProps'

export default class Input extends Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string
  }

  static defaultProps = {
    placeholder: '',
    type: 'text'
  }

  render() {
    const { field, placeholder, type } = this.props;

    return (
      <FormField {...this.props}>
        <input type={type} placeholder={placeholder} {...domProps(field)} />
      </FormField>
    )
  }
}

