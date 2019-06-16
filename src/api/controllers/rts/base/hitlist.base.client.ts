import http from '@/api/client';

export default {
  fetch() {
    return http().get(`/base/hitlist.json`);
  },
  add(Hitlist) {
    return http().post(`/base/hitlist.json`, { Hitlist });
  },
  remove(Hitlist) {
    return http().delete(`/base/hitlist.json`, { Hitlist });
  },
};
