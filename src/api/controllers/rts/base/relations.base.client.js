import http from '@/api/client';

export default {
  fetch() {
    return http().get(`/base/relations.json`);
  },
  edit(Relations) {
    return http().post(`/base/relations.json`, { Relations });
  },
};
