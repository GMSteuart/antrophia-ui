import http from '@/api/client'

export default {
  fetch() {
    return http().get(`/messages.json`)
  },
  send(userId: number, form: any) {
    return http().post(`/messages/send/${userId}.json`, { Message: form })
  },
  view(messageId: number) {
    return http().get(`/messages/view/${messageId}`)
  },
  reply(form: any) {
    return http().post(`/messages/reply.json`, { Message: form })
  }
}
