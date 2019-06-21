import router from '@/router'

router.addRoutes([
  {
    path: '/rts/labs',
    component: () => import(/* webpackChunkName: "rts-labs" */ './pages/Labs.vue'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-labs',
        component: () => import(/* webpackChunkName: "rts-labs-index" */ './pages/LabsIndex.vue'),
      },
      {
        path: 'view/:lab_id',
        name: 'rts-labs-view',
        props: true,
        component: () => import(/* webpackChunkName: "rts-labs-view" */ './pages/LabsView.vue'),
      },
    ]
  },
])