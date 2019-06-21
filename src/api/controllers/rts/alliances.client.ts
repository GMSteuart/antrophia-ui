import http from '@/api/client'

export default {
  fetch() {
    return http().get('/alliances.json')
  },
  // TODO: update so the form object is passed
  add(name: string, password: string, passwordConfirm: string, info: string) {
    return http().post(`/alliances/add.json`, {
      Alliance: {
        name,
        password,
        password_confirm: passwordConfirm,
        info
      }
    })
  },
  // TODO: update so the form object is passed
  join(allianceId: number, password: string) {
    return http().post(`/alliances/join/${allianceId}.json`, {
      Alliance: {
        password
      }
    })
  },
  view(allianceId: number) {
    return http().get(`/alliances/view/${allianceId}.json`)
  }
}
