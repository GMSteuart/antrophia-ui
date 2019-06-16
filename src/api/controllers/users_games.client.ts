import http from '@/api/client';

export default {
  fetch(game_id) {
    return http().get(`/users_games/index/${game_id}.json`);
  },
  add(game_id, race_id) {
    return http().post(`/users_games/add/${game_id}.json`, {
      UserGame: {
        race_id,
      },
    });
  },
};
