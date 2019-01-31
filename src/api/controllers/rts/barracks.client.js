import http from '@/api/client';

export default {
  fetch() {
    return http().get(`/barracks.json`);
  },
  finish() {
    return http().post(`/barracks/finish.json`);
  },
  stacking() {
    return http().get(`/barracks/stacking.json`);
  },
  start(Barracks) {
    return http().post(`/barracks/train.json`, {
      Barracks,
    });
  },
  reorder(stack) {
    return http().post(`/barracks/reorder.json`, { stack });
  },
  calc(Barracks) {
    return http().post(`/barracks/calc.json`, { Barracks });
  },
  cancel() {
    return http().post(`/barracks/cancel.json`, null);
  },
  disband(Barracks) {
    return http().post(`/barracks/disband.json`, { Barracks });
  },
};
