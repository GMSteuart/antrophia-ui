import router from '@/router'

router.addRoutes([
  {
    path: '/rts/online',
    component: () => import(/* webpackChunkName: "rts-online" */ './pages/Online.vue'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-online',
        component: () => import(/* webpackChunkName: "rts-online-index" */ './pages/OnlineIndex.vue'),
      },
    ]
  },
])