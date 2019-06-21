import http from './client'

export const antrophiaApi = {
  getAll(controller: string) {
    return http().get(`/${controller}.json`)
  },
  add(controller: string, data: any) {
    return http().post(`/${controller}.json`, data)
  },
  edit(controller: string, data: any) {
    return http().put(`/${controller}.json`, data)
  },
  play(game_id) {
    return http().post(`/games/play/${game_id}.json`)
  }
}