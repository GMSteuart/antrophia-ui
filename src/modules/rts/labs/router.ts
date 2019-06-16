import router from '@/router'

router.addRoutes([
  {
    path: '/rts/labs',
    component: () => import(/* webpackChunkName: "rts-labs" */ './pages/Labs'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-labs',
        component: () => import(/* webpackChunkName: "rts-labs-index" */ './pages/LabsIndex'),
      },
      {
        path: 'view/:lab_id',
        name: 'rts-labs-view',
        props: true,
        component: () => import(/* webpackChunkName: "rts-labs-view" */ './pages/LabsView'),
      },
    ]
  },
])