export default {
  home: {
    obey: 'Obey the Toad',
    home: 'Home',
    new_user: 'Create New User',
    recipes: 'Recipes',
  },
  validation: {
    required: 'Required',
    email: 'Please enter a valid email address',
    matches: 'Does not match'
  },
  recipes: {
    name: 'Name',
    boil_time: 'Boil Time',
    created_at: 'Date Created'
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
        },
        email: {
          taken: "Email address already taken"
        },
        username: {
          taken: "UserName already taken"
        }
      }
    }
  }
}
