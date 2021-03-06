import router from '@/router'

router.addRoutes([
  {
    path: '/rts/factories',
    component: () => import(/* webpackChunkName: "rts-factories" */ './pages/Factories'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-factories',
        component: () => import(/* webpackChunkName: "rts-factories-index" */ './pages/FactoriesIndex'),
      },
    ]
  },
])