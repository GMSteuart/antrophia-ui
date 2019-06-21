import http from '@/api/client'

export default {
  fetch(gameId: number) {
    return http().get(`/users_games/index/${gameId}.json`)
  }
}
