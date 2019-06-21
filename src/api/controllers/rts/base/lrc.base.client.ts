import http from '@/api/client'

export default {
  fetchTargets() {
    return http().get(`/base/lrc.json`)
  },
  name(form: any) {
    return http().post(`/base/lrc.json`, { Lrc: form })
  },
  addMinerals(form: any) {
    return http().post(`/base/lrc.json`, { LrcAdd: form })
  },
  selectTarget(form: any) {
    return http().post(`/base/lrc.json`, { LrcTarget: form })
  }
}
