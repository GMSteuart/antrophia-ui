import build_client from '@/api/controllers/rts/build.client'
import router from '@/router'
import { Module, MutationTree, ActionTree } from 'vuex'
import { RootState } from '../types'

export interface Building {
  id: number
}
export interface BuildState {
  buildings: Building[]
  cost: number
  free_land: number
  land_used: number
  time: number
}

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
      const { time, cost, land_used, free_land } = data

      commit('setCost', cost)
      commit('setFreeLand', free_land)
      commit('setLandUsed', land_used)
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
  setFreeLand(_state, free_land) {
    _state.free_land = free_land
  },
  setLandUsed(_state, land_used) {
    _state.land_used = land_used
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
