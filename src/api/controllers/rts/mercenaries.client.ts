import http from '@/api/client';

export default {
  targets() {
    return http().get(`/mercenaries.json`);
  },
  send(Mercenaries) {
    return http().post(`/mercenaries/send.json`, { Mercenaries });
  },
};
