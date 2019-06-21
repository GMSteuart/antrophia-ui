import base_client from '@/api/controllers/rts/base.client'
import { bank } from './base/bank.base.module'
import { AllianceState } from '../../types/index'
import { Module, ActionTree, MutationTree } from 'vuex'
import { RootState } from '../types'
import { alliances } from './alliances.module'

export const state: AllianceState = {
  // Alliance: {},
  // Build: {},
  // Coleader: {},
  // ConfirmedRelations: [],
  // InitiatedRelations: [],
  // Leader: {},
  // Lrc: {},
  // Member: [],
  // News: [],
  // RequestedRelations: []
}

export const actions: ActionTree<AllianceState, RootState> = {
  // TODO: this can probably be refactored to a GET CRUD action
  async fetch({ commit }) {
    try {
      const { data } = await base_client.fetch()
      commit('setAlliance', data)
    } catch (err) {
      throw new Error(err)
    }
  }
}

export const mutations: MutationTree<AllianceState> = {
  setAlliance(_state, alliance) {
    // Iterate over the properties in the state because its everything thats expected
    for (const property in _state) {
      if (_state.hasOwnProperty(property)) {
        // If the player object has it, then lets set them equal
        if (alliance.hasOwnProperty(property)) {
          _state[property] = alliance[property]
        } else {
          // Otherwise we will set it to null. This helps with finishing builds, research, etc.
          _state[property] = null
        }
      }
    }
  }
}

export const base: Module<AllianceState, RootState> = {
  namespaced: true,
  state,
  mutations,
  modules: {
    bank
  }
}
