import http from '@/api/client'

export default {
  fetch() {
    return http().get(`/base/hitlist.json`)
  },
  add(form: any) {
    return http().post(`/base/hitlist.json`, { Hitlist: form })
  },
  remove(form: any) {
    return http().delete(`/base/hitlist.json`, { data: { Hitlist: form } })
  }
}
