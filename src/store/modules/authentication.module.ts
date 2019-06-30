import auth from '@/auth'
import router from '@/router'
import { AuthState, RootState } from '@/types'
import { Module, ActionTree, MutationTree, GetterTree } from 'vuex'

export const state: AuthState = {
  status: {
    authenticated: false
  },
  user: undefined
}

export const actions: ActionTree<AuthState, RootState> = {
  async login({ dispatch, commit }, { email, password }) {
    try {
      commit('loginRequest', { email })
      const { data } = await auth.login(email, password)
      const { user } = data
      commit('loginSuccess', user)
      router.push('/lobby')
    } catch (err) {
      commit('loginFailure', err)
      dispatch('alert/error', err, { root: true })
    }
  },
  async logout({ commit }) {
    try {
      await auth.logout()
      commit('logout')
    } catch (err) {
      throw new Error(err)
    }
  },
  setCurrentGame({ commit }, gameId) {
    commit('setCurrentGame', gameId)
  }
}

export const mutations: MutationTree<AuthState> = {
  loginRequest(_state, user) {
    // TODO: implement NONE, PENDING, ERROR SUCCESS, state
    // _state.status = { loggingIn: true }
    _state.user = user
  },
  loginSuccess(_state, user) {
    _state.status.authenticated = true
    _state.user = user
  },
  loginFailure(_state) {
    _state.status.authenticated = false
    _state.user = undefined
  },
  logout(_state) {
    _state.status.authenticated = false
    _state.user = undefined
  },
  setCurrentGame(_state, gameId) {
    if (_state.user) {
      _state.user.current_game_id = gameId
    }
  }
}

export const getters: GetterTree<AuthState, RootState> = {
  authenticated(_state) {
    return _state.status.authenticated
  }
}

export const authentication: Module<AuthState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
