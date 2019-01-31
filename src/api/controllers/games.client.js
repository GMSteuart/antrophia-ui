import http from '@/api/client';

export default {
  fetch() {
    return http().get('/games.json');
  },
  play(game_id) {
    return http().post(`/games/play/${game_id}.json`);
  },
};
