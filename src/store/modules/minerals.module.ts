import groupBy from 'lodash/groupBy'
import { CrudState, MineralsState, RootState } from '@/types'
import { Module, ActionTree, MutationTree, GetterTree } from 'vuex'
import { antrophiaApi } from '@/api/antrophia-api'
import { crudMutations } from '../generators/crud-mutations'

export const state: MineralsState = {
  all: []
}

export const actions: ActionTree<MineralsState, RootState> = {
  async fetch({ commit }) {
    try {
      const { data } = await antrophiaApi.getAll('minerals')
      commit('setAll', data)
    } catch (err) {
      throw new Error(err)
    }
  }
}

export const mutations: MutationTree<MineralsState> = {
  ...crudMutations('minerals')
}

export const getters: GetterTree<MineralsState, RootState> = {
  orderByType(_state) {
    // TODO: can optimizations be made by removing groupBy?
    return groupBy(_state.all, 'Type.name')
  }
}

export const minerals: Module<MineralsState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
