import barracks_client from '@/api/controllers/rts/barracks.client'
import router from '@/router'
import { BarracksState, RootState } from '@/types/index'
import { Module, ActionTree, MutationTree } from 'vuex'

export const state: BarracksState = {
  cost: 0,
  time: 0
}

export const actions: ActionTree<BarracksState, RootState> = {
  async disband({ dispatch }, form) {
    try {
      const { data } = await barracks_client.disband(form)
      const { message, success } = data
      if (success) {
        dispatch('alert/success', message, { root: true })
      } else {
        dispatch('alert/error', message, { root: true })
      }
      router.push({ name: 'rts-barracks-disband' })
      dispatch('player/fetch', null, { root: true })
    } catch (err) {
      throw new Error(err)
    }
  },
  async finish({ dispatch }) {
    try {
      const { data } = await barracks_client.finish()
      const { message, success } = data

      if (success) {
        dispatch('alert/success', message, { root: true })
      } else {
        dispatch('alert/error', message, { root: true })
      }
      router.push({ name: 'rts-barracks' })
      dispatch('player/fetch', null, { root: true })
    } catch (err) {
      throw new Error(err)
    }
  },
  async start({ dispatch }, form) {
    try {
      const { data } = await barracks_client.start(form)
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
  async calc({ commit }, form) {
    try {
      const { data } = await barracks_client.calc(form)
      const { time, cost } = data
      commit('setTime', time)
      commit('setCost', cost)
    } catch (err) {
      throw new Error(err)
    }
  },
  async reorder({ dispatch }, stack) {
    try {
      const { data } = await barracks_client.reorder(stack)
      dispatch('player/fetch', null, { root: true })
    } catch (err) {
      throw new Error(err)
    }
  }
}

export const mutations: MutationTree<BarracksState> = {
  setCost(_state, cost) {
    _state.cost = cost
  },
  setTime(_state, time) {
    _state.time = time
  }
}

export const barracks: Module<BarracksState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
}
