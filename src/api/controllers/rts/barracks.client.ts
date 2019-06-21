import http from '@/api/client'

export default {
  fetch() {
    return http().get(`/barracks.json`)
  },
  finish() {
    return http().post(`/barracks/finish.json`)
  },
  stacking() {
    return http().get(`/barracks/stacking.json`)
  },
  start(form: any) {
    return http().post(`/barracks/train.json`, {
      Barracks: form
    })
  },
  reorder(form: any) {
    return http().post(`/barracks/reorder.json`, { stack: form })
  },
  calc(form: any) {
    return http().post(`/barracks/calc.json`, { Barracks: form })
  },
  cancel() {
    return http().post(`/barracks/cancel.json`, null)
  },
  disband(form: any) {
    return http().post(`/barracks/disband.json`, { Barracks: form })
  }
}
