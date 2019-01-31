import router from '@/router'

router.addRoutes([
  {
    path: '/rts/mercenaries',
    component: () => import(/* webpackChunkName: "rts-mercenaries" */ './pages/Mercenaries'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-mercenaries',
        component: () => import(/* webpackChunkName: "rts-mercenaries-index" */ './pages/MercenariesIndex'),
      },
      {
        path: 'send',
        name: 'rts-mercenaries-send',
        component: () => import(/* webpackChunkName: "rts-mercenaries-send" */ './pages/MercenariesSend'),
      }
    ]
  },
])