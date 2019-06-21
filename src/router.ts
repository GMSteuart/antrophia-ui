/**
 * Router file
 *
 * Naming Conventions: name => controller-action
 */

import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import Home from '@/views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // Main Routes
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { layout: 'main' }
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: () =>
        import(/* webpackChunkName: "lobby" */ '@/views/Lobby.vue'),
      meta: { layout: 'main' }
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ '@/views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "register" */ '@/views/Register.vue')
    },

    {
      path: '/games',
      name: 'Games',
      component: () =>
        import(/* webpackChunkName: "Game" */ '@/views/games/Game.vue'),
      children: [
        {
          path: 'join/:game_id',
          name: 'usersgames-add',
          component: () =>
            import(
              /* webpackChunkName: "JoinGame" */ '@/views/games/JoinGame.vue'
            ),
          meta: {
            requiresAuth: true
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters['authentication/loggedIn']) {
      next({
        name: 'login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
