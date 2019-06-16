import router from '@/router'

router.addRoutes([
  {
    path: '/rts/market',
    component: () => import(/* webpackChunkName: "rts-market" */ './pages/Market'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-market',
        component: () => import(/* webpackChunkName: "rts-market-index" */ './pages/MarketIndex'),
      },
      {
        path: 'add',
        name: 'rts-market-add',
        props: true,
        component: () => import(/* webpackChunkName: "rts-market-add" */ './pages/MarketAdd'),
      },
    ]
  },
])