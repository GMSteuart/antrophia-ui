import http from '@/api/client'

export default {
  fetch() {
    return http().get(`/spies.json`)
  },
  view(reportId: number) {
    return http().get(`/spies/view/${reportId}.json`)
  },
  train(form: any) {
    return http().post(`/spies/train.json`, { Spy: form })
  },
  calc(form: any) {
    return http().post(`/spies/calc.json`, { Spy: form })
  },
  cancel() {
    return http().delete(`/spies/cancel.json`)
  },
  send(form: any) {
    return http().post(`/spies/send.json`, { SpyReports: form })
  },
  finish() {
    return http().post(`/spies/finish.json`)
  }
}
