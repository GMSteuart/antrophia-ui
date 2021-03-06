import router from '@/router'

router.addRoutes([
  {
    path: '/rts/bounties',
    component: () => import(/* webpackChunkName: "rts-bounties" */ './pages/Bounties'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-bounties',
        component: () => import(/* webpackChunkName: "rts-bounties-index" */ './pages/BountiesIndex'),
      },
    ]
  },
])