import router from '@/router'

router.addRoutes([
  {
    path: '/rts/spies',
    component: () => import(/* webpackChunkName: "rts-spies" */ './pages/Spies'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-spies',
        component: () => import(/* webpackChunkName: "rts-spies-index" */ './pages/SpiesIndex'),
      },
      {
        path: 'view/:report_id',
        name: 'rts-spies-view',
        props: true,
        component: () => import(/* webpackChunkName: "rts-spies-view" */ './pages/SpiesView'),
      }
    ]
  },
])