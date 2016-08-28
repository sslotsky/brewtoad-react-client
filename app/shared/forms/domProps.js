export default function domProps(field) {
  const {
    initialValue: _initialValue,
    autofill: _autofill,
    onUpdate: _onUpdate,
    valid: _valid,
    invalid: _invalid,
    dirty: _dirty,
    pristine: _pristine,
    active: _active,
    touched: _touched,
    visited: _visited,
    autofilled: _autofilled,
    error: _error,
    ...validDomProps
  } = field

  return validDomProps
}
