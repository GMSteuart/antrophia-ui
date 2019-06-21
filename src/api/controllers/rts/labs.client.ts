import http from '@/api/client'

export default {
  fetch() {
    return http().get(`/labs.json`)
  },
  view(labId: number) {
    return http().get(`/labs/view/${labId}.json`)
  },
  research(labId: number) {
    return http().post(`/labs/researc/${labId}.json`)
  },
  cancel() {
    return http().delete(`/labs/cancel.json`)
  },
  finish() {
    return http().post(`/labs/finish.json`)
  }
}
