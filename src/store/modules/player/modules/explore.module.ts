import router from '@/router'
import explore_client from '@/api/controllers/rts/explore.client'
import { Module, ActionTree, MutationTree } from 'vuex'
import { Explore, ExploreState, RootState } from '@/types'

export const state: ExploreState = {
  estimatedLandGain: 0
}

export const actions: ActionTree<ExploreState, RootState> = {
  async calc({ commit }, payload) {
    try {
      const { data } = await explore_client.calc(payload)
      const { amount } = data
      commit('setEstimatedLandGain', amount)
    } catch (err) {
      throw new Error(err)
    }
  },
  async start({ dispatch }, payload) {
    try {
      const { data } = await explore_client.start(payload)
      const { message, success } = data

      if (success) {
        router.push({ name: 'rts-status' })
        dispatch('alert/success', message, { root: true })
      } else {
        dispatch('alert/error', message, { root: true })
      }
      dispatch('player/fetch', null, { root: true })
    } catch (err) {
      throw new Error(err)
    }
  },
  async cancel({ commit, dispatch }) {
    try {
      const { data } = await explore_client.cancel()
      const { message, success } = data

      if (success) {
        router.push({ name: 'rts-explore' })
        dispatch('alert/success', message, { root: true })
      } else {
        dispatch('alert/error', message, { root: true })
      }
      dispatch('player/fetch', null, { root: true })
      commit('setEstimatedLandGain', 0)
    } catch (err) {
      throw new Error(err)
    }
  },
  async finish({ commit, dispatch }) {
    try {
      const { data } = await explore_client.finish()
      const { message, success } = data

      if (success) {
        dispatch('alert/success', message, { root: true })
      } else {
        dispatch('alert/error', message, { root: true })
      }
      router.push({ name: 'rts-explore' })
      dispatch('player/fetch', null, { root: true })
      commit('setEstimatedLandGain', 0)
    } catch (err) {
      throw new Error(err)
    }
  }
}

export const mutations: MutationTree<ExploreState> = {
  setEstimatedLandGain(_state, amount) {
    _state.estimatedLandGain = amount
  }
}

export const explore: Module<ExploreState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
}
