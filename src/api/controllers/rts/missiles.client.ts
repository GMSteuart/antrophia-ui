import http from '@/api/client'

export default {
  targets() {
    return http().get(`/missiles.json`)
  },
  launch(form: any) {
    return http().post(`/missiles/launch.json`, { Missiles: form })
  }
}
