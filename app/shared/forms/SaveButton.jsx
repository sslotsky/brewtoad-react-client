import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'

export default class SaveButton extends Component {
  static propTypes = {
    label: PropTypes.string,
    dirty: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired,
    isSubmitting: PropTypes.bool
  }

  canSubmit() {
    const { dirty, valid } = this.props
    return dirty && valid;
  }

  render() {
    const classes = classnames('pure-button', 'pure-button-primary', {
      disabled: !this.canSubmit()
    })

    return (
      <input
        type="submit"
        className={classes}
        value={this.props.label}
        disabled={!this.canSubmit()}
      />
    )
  }
}

