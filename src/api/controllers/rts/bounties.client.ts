import http from '@/api/client';

export default {
  fetch() {
    return http().get(`/bounties.json`);
  },
  add(Bounty) {
    return http().post(`/bounties/add.json`, { Bounty });
  },
};
