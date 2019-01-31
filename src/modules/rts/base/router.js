import router from '@/router'

router.addRoutes([
  {
    path: '/rts/base',
    component: () => import(/* webpackChunkName: "rts-base" */ './pages/Base'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-base',
        component: () => import(/* webpackChunkName: "rts-base-index" */ './pages/BaseIndex'),
      },
      {
        path: 'bank',
        name: 'rts-base-bank',
        component: () => import(/* webpackChunkName: "rts-base-bank" */ './pages/BaseBank'),
      },
      {
        path: 'broadcast',
        name: 'rts-base-broadcast',
        component: () => import(/* webpackChunkName: "rts-base-broadcast" */ './pages/BaseBroadcast'),
      },
      {
        path: 'build',
        name: 'rts-base-build',
        component: () => import(/* webpackChunkName: "rts-base-build" */ './pages/BaseBuild'),
      },
      {
        path: 'coleader',
        name: 'rts-base-coleader',
        component: () => import(/* webpackChunkName: "rts-base-coleader" */ './pages/BaseColeader'),
      },
      {
        path: 'deposit',
        name: 'rts-base-deposit',
        component: () => import(/* webpackChunkName: "rts-base-deposit" */ './pages/BaseDeposit'),
      },
      {
        path: 'donate',
        name: 'rts-base-donate',
        component: () => import(/* webpackChunkName: "rts-base-deposit" */ './pages/BaseDonate'),
      },
      {
        path: 'hitlist',
        name: 'rts-base-hitlist',
        component: () => import(/* webpackChunkName: "rts-base-hitlist" */ './pages/BaseHitlist'),
      },
      {
        path: 'kick',
        name: 'rts-base-kick',
        component: () => import(/* webpackChunkName: "rts-base-kick" */ './pages/BaseKick'),
      },
      {
        path: 'leader',
        name: 'rts-base-leader',
        component: () => import(/* webpackChunkName: "rts-base-leader" */ './pages/BaseLeader'),
      },
      // todo: probably best to make sub routes for the lrc
      {
        path: 'lrc',
        name: 'rts-base-lrc',
        component: () => import(/* webpackChunkName: "rts-base-lrc" */ './pages/BaseLrc'),
      },
      {
        path: 'relations',
        name: 'rts-base-relations',
        component: () => import(/* webpackChunkName: "rts-base-relations" */ './pages/BaseRelations'),
      },
      {
        path: 'settings',
        name: 'rts-base-settings',
        component: () => import(/* webpackChunkName: "rts-base-settings" */ './pages/BaseSettings'),
      },
      {
        path: 'transfer',
        name: 'rts-base-transfer',
        component: () => import(/* webpackChunkName: "rts-base-transfer" */ './pages/BaseTransfer'),
      },
      {
        path: 'transfer-leader',
        name: 'rts-base-transfer-leader',
        component: () => import(/* webpackChunkName: "rts-base-transfer-leader" */ './pages/BaseTransferLeader'),
      }
    ]
  }
])