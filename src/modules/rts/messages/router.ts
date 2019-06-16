import router from '@/router'

router.addRoutes([
  {
    path: '/rts/messages',
    component: () => import(/* webpackChunkName: "rts-messages" */ './pages/Messages'),
    meta: {
      layout: 'game',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'rts-messages',
        component: () => import(/* webpackChunkName: "rts-messages-index" */ './pages/MessagesIndex'),
      },
      {
        path: 'view/:message_id',
        name: 'rts-messages-view',
        props: true,
        component: () => import(/* webpackChunkName: "rts-messages-view" */ './pages/MessagesView'),
      },
      {
        path: 'send',
        name: 'rts-messages-add',
        component: () => import(/* webpackChunkName: "rts-messages-add" */ './pages/MessagesSend'),
      },
      {
        path: 'outbox',
        name: 'rts-messages-outbox',
        component: () => import(/* webpackChunkName: "rts-messages-outbox" */ './pages/MessagesOutbox'),
      }
    ]
  },
])