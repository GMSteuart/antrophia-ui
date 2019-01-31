import http from '@/api/client';

export default {
  fetch() {
    return http().get('/units.json');
  },
};
