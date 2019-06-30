import http from '@/api/client'

export default {
  fetch() {
    return http().get(`/war.json`)
  },
  attack(form: any) {
    return http().post(`/war/attack.json`, { Battle: form })
  },
  view(battleId: number) {
    return http().get(`/war/view/${battleId}.json`)
  }
}
