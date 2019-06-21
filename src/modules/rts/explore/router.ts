import router from '@/router'

router.addRoutes([
  {
    path: '/rts/explore',
    component: () => import(/* webpackChunkName: "rts-explore" */ './pages/Explore.vue'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-explore',
        component: () => import(/* webpackChunkName: "rts-explore-index" */ './pages/ExploreIndex.vue'),
      }
    ]
  }
])