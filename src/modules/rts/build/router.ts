import router from '@/router';

router.addRoutes([
  {
    path: '/rts/build',
    component: () =>
      import(/* webpackChunkName: "rts-build" */ './pages/Build.vue'),
    meta: {
      layout: 'game',
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'rts-build',
        component: () =>
          import(/* webpackChunkName: "rts-build-index" */ './pages/BuildIndex.vue'),
      },
      {
        path: 'destroy',
        name: 'rts-destroy',
        component: () =>
          import(/* webpackChunkName: "rts-build-destroy" */ './pages/BuildDestroy.vue'),
      },
    ],
  },
]);
