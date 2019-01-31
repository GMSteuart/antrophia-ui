import http from '@/api/client';

export default {
  fetch() {
    return http().get(`/messages.json`);
  },
  send(user_id, Message) {
    return http().post(`/messages/send/${user_id}.json`, { Message });
  },
  view(message_id) {
    return http().get(`/messages/view/${message_id}`);
  },
  reply(Message) {
    return http().post(`/messages/reply.json`, { Message });
  },
};
