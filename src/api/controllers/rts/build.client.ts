import http from '@/api/client'

export default {
  start(form: any) {
    return http().post(`/build/start.json`, { Build: form })
  },
  calc(form: any) {
    return http().post(`/build/calc.json`, { Build: form })
  },
  cancel() {
    return http().delete(`/build/cancel.json`)
  },
  destroy(form: any) {
    return http().post(`/build/destroy.json`, { form })
  },
  finish() {
    return http().post(`/build/finish.json`)
  }
}
