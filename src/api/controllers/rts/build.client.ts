import http from '@/api/client';

export default {
  start(Build) {
    return http().post(`/build/start.json`, { Build });
  },
  calc(Build) {
    return http().post(`/build/calc.json`, { Build });
  },
  cancel() {
    return http().delete(`/build/cancel.json`);
  },
  destroy(form) {
    return http().post(`/build/destroy.json`, { form });
  },
  finish() {
    return http().post(`/build/finish.json`);
  },
};
