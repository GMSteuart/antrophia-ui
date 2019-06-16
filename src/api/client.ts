import auth from '@/auth';
import axios from 'axios/index';

const endpoint =
  process.env.NODE_ENV === 'production'
    ? 'https://api.antrophia.com'
    : 'https://api.antrophia.lndo.site';

export default () => {
  const http = axios.create({
    baseURL: endpoint,
  });

  http.CancelToken = axios.CancelToken;
  http.isCancel = axios.isCancel;

  /*
 * The interceptor here ensures that we check for the token in local storage every time an ajax request is made
 * https://forum.vuejs.org/t/add-header-token-to-axios-requests-after-login-action-in-vuex/38834/3
 */
  http.interceptors.request.use(
    config => {
      let token = localStorage.getItem('token');

      if (token) {
        config.headers = auth.getAuthHeader();
      }

      return config;
    },

    error => {
      return Promise.reject(error);
    }
  );

  http.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      return Promise.reject(error.response);
    }
  );

  return http;
};
