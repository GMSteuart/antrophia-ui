import router from '@/router';

router.addRoutes([
  {
    path: '/rts/bonus',
    component: () =>
      import(/* webpackChunkName: "rts-bonus" */ './pages/Bonus'),
    meta: {
      layout: 'game',
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'rts-bonus',
        component: () =>
          import(/* webpackChunkName: "rts-bonus-index" */ './pages/BonusIndex'),
      },
    ],
  },
]);
