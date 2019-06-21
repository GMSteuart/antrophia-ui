import http from '@/api/client'

export default {
  fetch() {
    return http().get(`/shops.json`)
  },
  buy(form: any) {
    return http().post(`/shops/buy.json`, { Shops: form })
  },
  calc(form: any) {
    return http().post(`/shops/calc.json`, { Shops: form })
  }
}
