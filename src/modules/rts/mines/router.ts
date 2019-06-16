import router from '@/router'

router.addRoutes([
  {
    path: '/rts/mines',
    component: () => import(/* webpackChunkName: "rts-mines" */ './pages/Mines'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-mines',
        component: () => import(/* webpackChunkName: "rts-mines-index" */ './pages/MinesIndex'),
      },
    ]
  },
])