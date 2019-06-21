import http from '@/api/client'

export default {
  fetch() {
    return http().get(`/base.json`)
  },
  broadcast(form: any) {
    return http().post(`/base/broadcast.json`, { Message: form })
  },
  build(form: any) {
    return http().post(`/base/build.json`, { Build: form })
  },
  buildCalc(form: any) {
    return http().post(`/base/buildCalc.json`, { Build: form })
  },
  coleader(form: any) {
    return http().post(`/base/coleader.json`, { Assign: form })
  },
  disband() {
    return http().delete(`/base/disband.json`)
  },
  donate(form: any) {
    return http().post(`/base/donate.json`, { Donate: form })
  },
  kick(form: any) {
    return http().post(`/base/kick.json`, { Kick: form })
  },
  leader(form: any) {
    return http().post(`/base/leader.json`, { Leader: form })
  },
  leave() {
    return http().delete(`/base/leave.json`)
  },
  transfer(form: any) {
    return http().post(`/base/transfer.json`, { Transfer: form })
  }
}
