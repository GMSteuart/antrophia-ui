import http from '@/api/client'

export default {
  updatePassword(form: any) {
    return http().post(`/base/settings.json`, { Password: form })
  },
  updateInfo(form: any) {
    return http().post(`/base/settings.json`, { Info: form })
  }
}
