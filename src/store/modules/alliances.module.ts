import alliances_client from '@/api/controllers/rts/alliances.client'
import router from '@/router'
import { Module, ActionTree, MutationTree } from 'vuex'
import { Alliance, AlliancesState, RootState } from '@/types'
import { crudActions } from '../generators/crud-actions'

export const state: AlliancesState = {
  all: [],
  active: undefined
}

export const actions: ActionTree<AlliancesState, RootState> = {
  ...crudActions('alliances'),
  async create({ dispatch }, { name, password, password_confirm, info }) {
    try {
      const { data } = await alliances_client.add(
        name,
        password,
        password_confirm,
        info
      )
      const { message } = data
      router.push({ name: 'rts-base' })
      dispatch('alert/success', message, { root: true })
    } catch (err) {
      throw new Error(err)
    }
  },
  async join({ dispatch }, { alliance_id, password }) {
    try {
      const { data } = await alliances_client.join(alliance_id, password)
      const { message } = data
      router.push({ name: 'rts-base' })
      dispatch('alert/success', message, { root: true })
    } catch (err) {
      throw new Error(err)
    }
  },
  async view({ commit }, allianceId) {
    try {
      const { data } = await alliances_client.view(allianceId)
      const { alliance } = data
      commit('setActive', alliance)
    } catch (err) {
      throw new Error(err)
    }
  }
}

export const mutations: MutationTree<AlliancesState> = {
  setActive(_state, payload: Alliance) {
    _state.active = payload
  },
  setAlliances(_state, payload: Alliance[]) {
    _state.all = payload
  }
}

export const alliances: Module<AlliancesState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions
}
