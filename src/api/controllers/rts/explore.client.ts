import http from '@/api/client'

export default {
  start(data: any) {
    // TODO: map to add
    return http().post(`/explore/start.json`, { Explore: data })
  },
  calc(data: any) {
    // TODO: map to possibly View, Lookup, or Custom
    return http().post(`/explore/calc.json`, { Explore: data })
  },
  cancel() {
    // TODO: map Detele as well as finish?
    return http().delete(`/explore/cancel.json`)
  },
  finish() {
    return http().post(`/explore/finish.json`)
  }
}
