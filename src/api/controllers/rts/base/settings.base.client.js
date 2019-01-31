import http from '@/api/client';

export default {
  updatePassword(Password) {
    return http().post(`/base/settings.json`, { Password });
  },
  updateInfo(Info) {
    return http().post(`/base/settings.json`, { Info });
  },
};
