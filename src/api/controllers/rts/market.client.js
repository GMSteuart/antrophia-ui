import http from '@/api/client';

export default {
  fetch() {
    // todo: implement pagination
    return http().get(`/market.json`);
  },
  add(Market) {
    return http().post(`/market/add.json`, { Market });
  },
  buy(market_id) {
    return http().get(`/market/buy/${market_id}.json`);
  },
  remove(market_id) {
    return http().delete(`/market/remove/${market_id}.json`);
  },
};
