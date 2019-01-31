import http from '@/api/client';

export default {
  fetch() {
    return http().get(`/base.json`);
  },
  broadcast(Message) {
    return http().post(`/base/broadcast.json`, { Message });
  },
  build(Build) {
    return http().post(`/base/build.json`, { Build });
  },
  buildCalc(Build) {
    return http().post(`/base/buildCalc.json`, { Build });
  },
  coleader(Assign) {
    return http().post(`/base/coleader.json`, { Assign });
  },
  disband() {
    return http().delete(`/base/disband.json`);
  },
  donate(Donate) {
    return http().post(`/base/donate.json`, { Donate });
  },
  kick(Kick) {
    return http().post(`/base/kick.json`, { Kick });
  },
  leader(Leader) {
    return http().post(`/base/leader.json`, { Leader });
  },
  leave() {
    return http().delete(`/base/leave.json`);
  },
  transfer(Transfer) {
    return http().post(`/base/transfer.json`, { Transfer });
  },
};
