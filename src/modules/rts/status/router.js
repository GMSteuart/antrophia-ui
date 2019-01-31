import router from '@/router'

router.addRoutes([
  {
    path: '/rts/status',
    component: () => import(/* webpackChunkName: "rts-status" */ './pages/Status'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-status',
        component: () => import(/* webpackChunkName: "rts-status-index" */ './pages/StatusIndex'),
      },
    ]
  }
])