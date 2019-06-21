import http from '@/api/client'

export default {
  fetch() {
    return http().get(`/bounties.json`)
  },
  add(form: any) {
    return http().post(`/bounties/add.json`, { Bounty: form })
  }
}
