import http from '@/api/client'

export default {
  fetch() {
    return http().get(`/news.json`)
  },
  view(category: number) {
    return http().get(`/news/view/${category}.json`)
  }
}
