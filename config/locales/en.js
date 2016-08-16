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
      password_confirmation: 'Confirm Password',
      register: 'Register',
      validation: {
        password_confirmation: {
          matches: "Passwords don't match"
        }
      }
    }
  }
}
