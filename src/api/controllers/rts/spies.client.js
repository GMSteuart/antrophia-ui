import http from '@/api/client';

export default {
  fetch() {
    return http().get(`/spies.json`);
  },
  view(report_id) {
    return http().get(`/spies/view/${report_id}.json`);
  },
  train(Spy) {
    return http().post(`/spies/train.json`, { Spy });
  },
  calc(Spy) {
    return http().post(`/spies/calc.json`, { Spy });
  },
  cancel() {
    return http().delete(`/spies/cancel.json`);
  },
  send(SpyReports) {
    return http().post(`/spies/send.json`, { SpyReports });
  },
  finish() {
    return http().post(`/spies/finish.json`);
  },
};
