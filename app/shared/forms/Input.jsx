import React, { PropTypes, Component } from 'react'
import FormField from './FormField'
import domProps from './domProps'

export default class Input extends Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    id: PropTypes.string
  }

  static defaultProps = {
    placeholder: ''
  }

  render() {
    const { field, placeholder } = this.props;

    return (
      <FormField {...this.props}>
        <input type="text" placeholder={placeholder} {...domProps(field)} />
      </FormField>
    )
  }
}

