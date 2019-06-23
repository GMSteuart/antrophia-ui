import build_client from '@/api/controllers/rts/build.client'
import router from '@/router'
import { Module, MutationTree, ActionTree } from 'vuex'
import { Building, BuildState, RootState } from '@/types'

export const state: BuildState = {
  buildings: [],
  cost: 0,
  free_land: 0,
  land_used: 0,
  time: 0
}

export const actions: ActionTree<BuildState, RootState> = {
  async start({ dispatch }, form) {
    try {
      const { data } = await build_client.start(form)
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
      const { data } = await build_client.calc(form)
      const { time, cost, land_used: landUsed, free_land: freeLand } = data

      commit('setCost', cost)
      commit('setFreeLand', freeLand)
      commit('setLandUsed', landUsed)
      commit('setTime', time)
    } catch (err) {
      throw new Error(err)
    }
  },
  async cancel({ dispatch }) {
    try {
      const { data } = await build_client.cancel()
      const { message, success } = data

      if (success) {
        router.push({ name: 'rts-build' })
        dispatch('alert/success', message, { root: true })
      } else {
        dispatch('alert/error', message, { root: true })
      }
      dispatch('player/fetch', null, { root: true })
    } catch (err) {
      throw new Error(err)
    }
  },
  async finish({ dispatch }) {
    try {
      const { data } = await build_client.finish()
      const { message, success } = data

      if (success) {
        dispatch('alert/success', message, { root: true })
      } else {
        dispatch('alert/error', message, { root: true })
      }
      router.push({ name: 'rts-build' })
      dispatch('player/fetch', null, { root: true })
    } catch (err) {
      throw new Error(err)
    }
  }
}

export const mutations: MutationTree<BuildState> = {
  setBuildings(_state, buildings) {
    _state.buildings = buildings
  },
  setCost(_state, cost) {
    _state.cost = cost
  },
  setFreeLand(_state, payload: number) {
    _state.free_land = payload
  },
  setLandUsed(_state, payload: number) {
    _state.land_used = payload
  },
  setTime(_state, time) {
    _state.time = time
  }
}

export const build: Module<BuildState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
}
