import router from '@/router'
import { Module, ActionTree } from 'vuex'
import { CrudState, Factory, FactoriesState, RootState } from '@/types'
import { antrophiaApi } from '@/api/antrophia-api'

export const state: FactoriesState = {
  all: []
}

export const actions: ActionTree<FactoriesState, RootState> = {
  async update({ dispatch }, payload) {
    try {
      const { data } = await antrophiaApi.edit('factories', {
        Factory: payload
      })
      const { message, success } = data
      if (success) {
        router.push({ name: 'rts-factories' })
        dispatch('alert/success', message, { root: true })
      } else {
        dispatch('alert/error', message, { root: true })
      }
      dispatch('player/fetch', null, { root: true })
    } catch (err) {
      throw new Error(err)
    }
  }
}

export const factories: Module<FactoriesState, RootState> = {
  namespaced: true,
  state,
  actions
}
