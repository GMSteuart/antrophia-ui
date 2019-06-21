import http from '@/api/client'

export default {
  fetch(game_id) {
    return http().get(`/users_games/index/${game_id}.json`)
  }
}
