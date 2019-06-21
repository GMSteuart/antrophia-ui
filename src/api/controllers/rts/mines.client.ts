import http from '@/api/client'

export default {
  fetch() {
    return http().get(`/mines.json`)
  },
  update(form: any) {
    return http().post(`/mines/update.json`, { UserMine: form })
  }
}
