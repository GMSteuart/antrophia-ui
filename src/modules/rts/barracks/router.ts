import router from '@/router';

router.addRoutes([
  {
    path: '/rts/barracks',
    component: () =>
      import(/* webpackChunkName: "rts-barracks" */ './pages/Barracks.vue'),
    meta: {
      layout: 'game',
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'rts-barracks',
        component: () =>
          import(/* webpackChunkName: "rts-barracks-index" */ './pages/BarracksIndex.vue'),
      },
      {
        path: 'disband',
        name: 'rts-barracks-disband',
        component: () =>
          import(/* webpackChunkName: "rts-barracks-disband" */ './pages/BarracksDisband.vue'),
      },
      {
        path: 'stacking',
        name: 'rts-barracks-stacking',
        component: () =>
          import(/* webpackChunkName: "rts-barracks-stacking" */ './pages/BarracksStacking.vue'),
      },
    ],
  },
]);
