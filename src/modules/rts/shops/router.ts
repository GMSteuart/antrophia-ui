import router from '@/router'

router.addRoutes([
  {
    path: '/rts/shops',
    component: () => import(/* webpackChunkName: "rts-shops" */ './pages/Shops.vue'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-shops',
        component: () => import(/* webpackChunkName: "rts-shops-index" */ './pages/ShopsIndex.vue'),
      },
    ]
  },
])