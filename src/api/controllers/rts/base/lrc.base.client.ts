import http from '@/api/client';

export default {
  fetchTargets() {
    return http().get(`/base/lrc.json`);
  },
  name(Lrc) {
    return http().post(`/base/lrc.json`, { Lrc });
  },
  addMinerals(LrcAdd) {
    return http().post(`/base/lrc.json`, { LrcAdd });
  },
  selectTarget(LrcTarget) {
    return http().post(`/base/lrc.json`, { LrcTarget });
  },
};
