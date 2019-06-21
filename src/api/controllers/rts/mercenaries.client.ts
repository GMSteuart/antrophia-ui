import http from '@/api/client'

export default {
  targets() {
    return http().get(`/mercenaries.json`)
  },
  send(form: any) {
    return http().post(`/mercenaries/send.json`, { Mercenaries: form })
  }
}
