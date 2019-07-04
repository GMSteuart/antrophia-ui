import axios from 'axios'

// TODO: move this to the api and use api instance rather than axios
const endpoint =
  process.env.NODE_ENV === 'production'
    ? 'https://api.antrophia.com'
    : 'https://api.antrophia.lndo.site'

export default {
  user: {
    authenticated: false
  },
  async login(email: string, password: string) {
    try {
      const { data } = await axios.post(`${endpoint}/users/token.json`, {
        User: {
          email,
          password
        }
      })
      localStorage.setItem('token', data.token)
      this.user.authenticated = true
      return data.user
    } catch (err) {
      throw new Error(err)
    }
  },
  async register(creds: any) {
    try {
      const { data } = await axios.post(
        `${endpoint}/users/register.json`,
        creds
      )
      const { token } = data
      localStorage.setItem('token', token)
      this.user.authenticated = true
    } catch (err) {
      throw new Error(err)
    }
  },

  logout() {
    localStorage.removeItem('id_token')
    this.user.authenticated = false
  },

  checkAuth() {
    const jwt = localStorage.getItem('token')

    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },

  getAuthHeader() {
    return {
      // todo: for CakePHP 3.x
      // 'Authorization': 'Bearer ' + localStorage.getItem('id_token')
      Authorization: localStorage.getItem('token')
    }
  }
}
