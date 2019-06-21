import router from '@/router'

router.addRoutes([
  {
    path: '/rts/mercenaries',
    component: () => import(/* webpackChunkName: "rts-mercenaries" */ './pages/Mercenaries.vue'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-mercenaries',
        component: () => import(/* webpackChunkName: "rts-mercenaries-index" */ './pages/MercenariesIndex.vue'),
      },
      {
        path: 'send',
        name: 'rts-mercenaries-send',
        component: () => import(/* webpackChunkName: "rts-mercenaries-send" */ './pages/MercenariesSend.vue'),
      }
    ]
  },
])