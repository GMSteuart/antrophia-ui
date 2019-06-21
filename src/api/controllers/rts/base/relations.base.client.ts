import http from '@/api/client'

export default {
  fetch() {
    return http().get(`/base/relations.json`)
  },
  edit(form: any) {
    return http().post(`/base/relations.json`, { Relations: form })
  }
}
