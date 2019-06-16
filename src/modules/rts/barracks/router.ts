import router from '@/router';

router.addRoutes([
  {
    path: '/rts/barracks',
    component: () =>
      import(/* webpackChunkName: "rts-barracks" */ './pages/Barracks'),
    meta: {
      layout: 'game',
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'rts-barracks',
        component: () =>
          import(/* webpackChunkName: "rts-barracks-index" */ './pages/BarracksIndex'),
      },
      {
        path: 'disband',
        name: 'rts-barracks-disband',
        component: () =>
          import(/* webpackChunkName: "rts-barracks-disband" */ './pages/BarracksDisband'),
      },
      {
        path: 'stacking',
        name: 'rts-barracks-stacking',
        component: () =>
          import(/* webpackChunkName: "rts-barracks-stacking" */ './pages/BarracksStacking'),
      },
    ],
  },
]);
