import router from '@/router';

router.addRoutes([
  {
    path: '/rts/build',
    component: () =>
      import(/* webpackChunkName: "rts-build" */ './pages/Build'),
    meta: {
      layout: 'game',
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'rts-build',
        component: () =>
          import(/* webpackChunkName: "rts-build-index" */ './pages/BuildIndex'),
      },
      {
        path: 'destroy',
        name: 'rts-destroy',
        component: () =>
          import(/* webpackChunkName: "rts-build-destroy" */ './pages/BuildDestroy'),
      },
    ],
  },
]);
