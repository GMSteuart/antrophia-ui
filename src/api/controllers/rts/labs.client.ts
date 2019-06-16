import http from '@/api/client';

export default {
  fetch() {
    return http().get(`/labs.json`)
  },
  view(lab_id) {
    return http().get(`/labs/view/${lab_id}.json`)
  },
  research(lab_id) {
    return http().post(`/labs/researc/${lab_id}.json`)
  },
  cancel() {
    return http().delete(`/labs/cancel.json`)
  },
  finish() {
    return http().post(`/labs/finish.json`)
  }
};
