import http from '@/api/client';

export default {
  fetch() {
    return http().get(`/shops.json`);
  },
  buy(Shops) {
    return http().post(`/shops/buy.json`, { Shops });
  },
  calc(Shops) {
    return http().post(`/shops/calc.json`, { Shops });
  },
};
