import http from '@/api/client'

export default {
  fetch() {
    // todo: implement pagination
    return http().get(`/market.json`)
  },
  add(form: any) {
    return http().post(`/market/add.json`, { Market: form })
  },
  buy(marketId: number) {
    return http().get(`/market/buy/${marketId}.json`)
  },
  remove(marketId: number) {
    return http().delete(`/market/remove/${marketId}.json`)
  }
}
