import { AlertState, AlertType, RootState } from '@/types/index'
import { Module, ActionTree, MutationTree } from 'vuex'

export const state: AlertState = {
  type: undefined,
  message: undefined,
  delay: 5000
}

export const actions: ActionTree<AlertState, RootState> = {
  success({ commit, state: _state }, message) {
    commit('success', message)
    setTimeout(() => commit('clear'), _state.delay)
  },
  error({ commit, state: _state }, message) {
    commit('error', message)
    setTimeout(() => commit('clear'), _state.delay)
  },
  warning({ commit, state: _state }, message) {
    commit('warning', message)
    setTimeout(() => commit('clear'), _state.delay)
  },
  clear({ commit }, message) {
    commit('clear', message)
  }
}

export const mutations: MutationTree<AlertState> = {
  clear(_state) {
    _state.type = undefined
    _state.message = undefined
  },
  danger(_state, message) {
    _state.type = AlertType.Danger
    _state.message = message
  },
  error(_state, message) {
    _state.type = AlertType.Error
    _state.message = message
  },
  success(_state, message) {
    _state.type = AlertType.Success
    _state.message = message
  },
  warning(_state, message) {
    _state.type = AlertType.Warning
    _state.message = message
  }
}

export const alert: Module<AlertState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
}
