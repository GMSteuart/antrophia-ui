import axios from 'axios';

const endpoint =
  process.env.NODE_ENV === 'production'
    ? 'https://api.antrophia.com'
    : 'https://api.antrophia.lndo.site';

export default {
  user: {
    authenticated: false,
  },

  login(email, password) {
    return axios
      .post(`${endpoint}/users/token.json`, {
        User: {
          email,
          password,
        },
      })
      .then(({ data }) => {
        localStorage.setItem('token', data.token);

        this.user.authenticated = true;

        return data.user;
      });
  },

  register(creds) {
    return axios.post(`${endpoint}/users/register.json`, creds, data => {
      localStorage.setItem('token', data.token);

      this.user.authenticated = true;
    });
    // .error(err => {
    // TODO: implement error handler for register
    // });
  },

  logout() {
    localStorage.removeItem('id_token');
    this.user.authenticated = false;
  },

  checkAuth() {
    var jwt = localStorage.getItem('token');

    if (jwt) {
      this.user.authenticated = true;
    } else {
      this.user.authenticated = false;
    }
  },

  getAuthHeader() {
    return {
      // todo: for CakePHP 3.x
      // 'Authorization': 'Bearer ' + localStorage.getItem('id_token')
      AuthToken: localStorage.getItem('token'),
    };
  },
};
