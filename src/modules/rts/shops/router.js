import router from '@/router'

router.addRoutes([
  {
    path: '/rts/shops',
    component: () => import(/* webpackChunkName: "rts-shops" */ './pages/Shops'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-shops',
        component: () => import(/* webpackChunkName: "rts-shops-index" */ './pages/ShopsIndex'),
      },
    ]
  },
])