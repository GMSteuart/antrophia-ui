import http from '@/api/client';

export default {
  fetch() {
    return http().get(`/war.json`);
  },
  attack(Battle) {
    return http().post(`/war/attack.json`, { Battle });
  },
  view(battle_id) {
    return http().get(`/war/view/${battle_id}.json`);
  },
};
