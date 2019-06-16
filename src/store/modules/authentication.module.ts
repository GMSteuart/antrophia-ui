import auth from '@/auth'
import router from '@/router'

export const authentication = {
  namespaced: true,
  state: {
    status: {
      loggedIn: false,
    },
    user: {}
  },
  actions: {
    login({ dispatch, commit }, { email, password }) {
      commit('loginRequest', { email })

      auth.login(email, password)
        .then((user) => {
            commit('loginSuccess', user)
            router.push('/lobby')
          }
        )
        .catch((error) => {
          console.log(error)
          commit('loginFailure', error)
          dispatch('alert/error', error, { root: true })
        })
    },
    logout({ commit }) {
      auth.logout()
      commit('logout')
    },
    setCurrentGame({ commit }, game_id) {
      commit('setCurrentGame', game_id)
    }
  },
  mutations: {
    loginRequest(state, user) {
      state.status = { loggingIn: true }
      state.user = user
    },
    loginSuccess(state, user) {
      state.status = { loggedIn: true }
      state.user = user
    },
    loginFailure(state) {
      state.status = {}
      state.user = null
    },
    logout(state) {
      state.status = {}
      state.user = null
    },
    setCurrentGame(state, game_id) {
      state.user.current_game_id = game_id
    }
  },
  getters: {
    loggedIn: state => {
      return state.status.loggedIn
    }
  }
}
