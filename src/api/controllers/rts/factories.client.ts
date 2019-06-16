import http from '@/api/client';

export default {
  update(Factory) {
    return http().post(`/factories/update.json`, { Factory });
  },
};
