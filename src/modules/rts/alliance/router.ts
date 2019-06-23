import router from '@/router'

router.addRoutes([
  {
    path: '/rts/base',
    component: () => import(/* webpackChunkName: "rts-base" */ './pages/Base.vue'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-base',
        component: () => import(/* webpackChunkName: "rts-base-index" */ './pages/BaseIndex.vue'),
      },
      {
        path: 'bank',
        name: 'rts-base-bank',
        component: () => import(/* webpackChunkName: "rts-base-bank" */ './pages/BaseBank.vue'),
      },
      {
        path: 'broadcast',
        name: 'rts-base-broadcast',
        component: () => import(/* webpackChunkName: "rts-base-broadcast" */ './pages/BaseBroadcast.vue'),
      },
      {
        path: 'build',
        name: 'rts-base-build',
        component: () => import(/* webpackChunkName: "rts-base-build" */ './pages/BaseBuild.vue'),
      },
      {
        path: 'coleader',
        name: 'rts-base-coleader',
        component: () => import(/* webpackChunkName: "rts-base-coleader" */ './pages/BaseColeader.vue'),
      },
      {
        path: 'deposit',
        name: 'rts-base-deposit',
        component: () => import(/* webpackChunkName: "rts-base-deposit" */ './pages/BaseDeposit.vue'),
      },
      {
        path: 'donate',
        name: 'rts-base-donate',
        component: () => import(/* webpackChunkName: "rts-base-deposit" */ './pages/BaseDonate.vue'),
      },
      {
        path: 'hitlist',
        name: 'rts-base-hitlist',
        component: () => import(/* webpackChunkName: "rts-base-hitlist" */ './pages/BaseHitlist.vue'),
      },
      {
        path: 'kick',
        name: 'rts-base-kick',
        component: () => import(/* webpackChunkName: "rts-base-kick" */ './pages/BaseKick.vue'),
      },
      {
        path: 'leader',
        name: 'rts-base-leader',
        component: () => import(/* webpackChunkName: "rts-base-leader" */ './pages/BaseLeader.vue'),
      },
      // todo: probably best to make sub routes for the lrc
      {
        path: 'lrc',
        name: 'rts-base-lrc',
        component: () => import(/* webpackChunkName: "rts-base-lrc" */ './pages/BaseLrc.vue'),
      },
      {
        path: 'relations',
        name: 'rts-base-relations',
        component: () => import(/* webpackChunkName: "rts-base-relations" */ './pages/BaseRelations.vue'),
      },
      {
        path: 'settings',
        name: 'rts-base-settings',
        component: () => import(/* webpackChunkName: "rts-base-settings" */ './pages/BaseSettings.vue'),
      },
      {
        path: 'transfer',
        name: 'rts-base-transfer',
        component: () => import(/* webpackChunkName: "rts-base-transfer" */ './pages/BaseTransfer.vue'),
      },
      {
        path: 'transfer-leader',
        name: 'rts-base-transfer-leader',
        component: () => import(/* webpackChunkName: "rts-base-transfer-leader" */ './pages/BaseTransferLeader.vue'),
      }
    ]
  }
])