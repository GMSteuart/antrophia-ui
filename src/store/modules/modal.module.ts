import { Module, MutationTree, ActionTree } from 'vuex'
import { RootState } from '../types'

export interface ModalState {
  show: boolean
  text: string
}

export const state: ModalState = {
  show: false,
  text: ''
}

export const actions: ActionTree<ModalState, RootState> = {
  hide({ commit }) {
    commit('setShow', false)
  },
  setText({ commit }, text) {
    commit('setText', text)
  },
  show({ commit }) {
    commit('setShow', true)
  }
}

export const mutations: MutationTree<ModalState> = {
  setShow(_state: ModalState, show) {
    _state.show = show
  },
  setText(_state: ModalState, text) {
    _state.text = text
  }
}

export const modal: Module<ModalState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions
}
