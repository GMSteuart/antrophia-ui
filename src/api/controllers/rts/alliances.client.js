import http from '@/api/client';

export default {
  fetch() {
    return http().get('/alliances.json');
  },
  add(name, password, password_confirm, info) {
    return http().post(`/alliances/add.json`, {
      Alliance: {
        name,
        password,
        password_confirm,
        info,
      },
    });
  },
  join(alliance_id, password) {
    return http().post(`/alliances/join/${alliance_id}.json`, {
      Alliance: {
        password,
      },
    });
  },
  view(alliance_id) {
    return http().get(`/alliances/view/${alliance_id}.json`);
  },
};
