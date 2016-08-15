export default {
  validation: {
    required: 'Required',
    email: 'Please enter a valid email address',
    matches: 'Does not match'
  },
  users: {
    form: {
      username: 'UserName',
      email: 'Email',
      password: 'Password',
      passwordConfirmation: 'Confirm Password',
      register: 'Register',
      validation: {
        passwordConfirmation: {
          matches: "Passwords don't match"
        }
      }
    }
  }
}
