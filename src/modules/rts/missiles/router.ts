import router from '@/router'

router.addRoutes([
  {
    path: '/rts/missiles',
    component: () => import(/* webpackChunkName: "rts-missiles" */ './pages/Missiles.vue'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-missiles',
        component: () => import(/* webpackChunkName: "rts-missiles-index" */ './pages/MissilesIndex.vue'),
      },
    ]
  },
])