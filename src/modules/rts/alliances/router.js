 import router from '@/router'

 router.addRoutes([
   {
     path: '/rts/alliances',
     component: () => import(/* webpackChunkName: "rts-alliances" */ './pages/Alliances'),
     meta: {
       layout: 'game',
       requiresAuth: true
     },
     children: [
       {
         path: '',
         name: 'rts-alliances',
         component: () => import(/* webpackChunkName: "rts-alliances-index" */ './pages/AlliancesIndex'),
       },
       {
         path: 'view/:alliance_id',
         name: 'rts-alliances-view',
         props: true,
         component: () => import(/* webpackChunkName: "rts-alliances-view" */ './pages/AlliancesView'),
       },
       {
         path: 'create',
         name: 'rts-alliances-add',
         component: () => import(/* webpackChunkName: "rts-alliances-add" */ './pages/AlliancesAdd'),
       }
     ]
   },
 ])