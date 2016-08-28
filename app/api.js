import axios from 'axios'

const API_BASE = 'https://brewed-dev.herokuapp.com/v1'

function api() {
  return axios.create({
    baseURL: API_BASE,
    timeout: 10000,
    headers: {
      'X-Api-Key': 'b780aac581de488cf77a629517ac999b',
      Accept: 'application/json'
    }
  })
}

export default {
  users: {
    create: (username, email, password) =>
      api().post('/users', {
        user: {
          username,
          email,
          password
        }
      })
  },
  recipes: {
    index: (filters={}) =>
      api().get('/recipes', { params: { ...filters } })
  }
}
