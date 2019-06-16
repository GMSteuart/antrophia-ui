import router from '@/router'

router.addRoutes([
  {
    path: '/rts/war',
    component: () => import(/* webpackChunkName: "rts-war" */ './pages/War'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-war',
        component: () => import(/* webpackChunkName: "rts-war-index" */ './pages/WarIndex'),
      },
      {
        path: 'view/:battle_id',
        name: 'rts-war-view',
        component: () => import(/* webpackChunkName: "rts-war-view" */ './pages/WarView'),
      }
    ]
  },
])