import http from '@/api/client';

export default {
  start(Explore) {
    return http().post(`/explore/start.json`, { Explore });
  },
  calc(Explore) {
    return http().post(`/explore/calc.json`, { Explore });
  },
  cancel() {
    return http().delete(`/explore/cancel.json`);
  },
  finish() {
    return http().post(`/explore/finish.json`);
  },
};
