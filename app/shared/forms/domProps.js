export default function domProps(field) {
  const {
    initialValue,
    autofill,
    onUpdate,
    valid,
    invalid,
    dirty,
    pristine,
    active,
    touched,
    visited,
    autofilled,
    error,
    ...domProps
  } = field;

  return domProps;
}
