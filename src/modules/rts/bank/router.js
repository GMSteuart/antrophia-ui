import router from '@/router'

router.addRoutes([
  {
    path: '/rts/bank',
    component: () => import(/* webpackChunkName: "rts-bank" */ './pages/Bank'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-bank',
        component: () => import(/* webpackChunkName: "rts-bank-index" */ './pages/BankIndex'),
      }
    ]
  }
])