import router from '@/router'

router.addRoutes([
  {
    path: '/rts/news',
    component: () => import(/* webpackChunkName: "rts-news" */ './pages/News.vue'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-news',
        component: () => import(/* webpackChunkName: "rts-news-index" */ './pages/NewsIndex.vue'),
      },
    ]
  },
])