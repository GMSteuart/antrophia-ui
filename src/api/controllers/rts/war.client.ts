import http from '@/api/client'

export default {
  fetch() {
    return http().get(`/war.json`)
  },
  attack(Battle: any) {
    return http().post(`/war/attack.json`, { Battle })
  },
  view(battleId: number) {
    return http().get(`/war/view/${battleId}.json`)
  }
}
