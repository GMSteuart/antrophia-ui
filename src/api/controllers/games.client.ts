import http from '@/api/client'

export default {
  fetch() {
    return http().get('/games.json')
  },
  play(gameId: number) {
    return http().post(`/games/play/${gameId}.json`)
  }
}
