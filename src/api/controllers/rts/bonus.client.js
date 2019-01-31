import http from '@/api/client';

export default {
  claim() {
    return http().post(`/bonus.json`);
  },
};
