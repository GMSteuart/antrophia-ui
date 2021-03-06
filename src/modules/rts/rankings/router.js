import router from '@/router'

router.addRoutes([
  {
    path: '/rts/rankings',
    component: () => import(/* webpackChunkName: "rts-rankings" */ './pages/Rankings'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-rankings',
        component: () => import(/* webpackChunkName: "rts-rankings-index" */ './pages/RankingsIndex'),
      },
    ]
  },
])