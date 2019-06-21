import './class-component-hooks'

import Vue from 'vue'
import i18n from '@/i18n'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import auth from '@/auth'

import MainLayout from '@/layouts/MainLayout.vue'
import GameLayout from '@/layouts/GameLayout.vue'

Vue.component('main-layout', MainLayout)
Vue.component('game-layout', GameLayout)

import '@/modules/rts'
import './registerServiceWorker'

if (process.env.mode === 'production') {
  Vue.config.productionTip = false
}

auth.checkAuth()

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
