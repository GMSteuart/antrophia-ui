import base_bank_client from '@/api/controllers/rts/base/bank.base.client'
import router from '@/router'
import { Module, ActionTree } from 'vuex'
import { AllianceBankState } from '@/types'
import { RootState } from '../../types'

export const actions: ActionTree<AllianceBankState, RootState> = {
  async deposit({ dispatch }, form) {
    try {
      const { data } = await base_bank_client.deposit(form)
      const { message, success } = data

      if (success) {
        router.push({ name: 'rts-base' })
        dispatch('alert/success', message, { root: true })
      } else {
        dispatch('alert/error', message, { root: true })
      }
      dispatch('player/fetch', null, { root: true })
    } catch (err) {
      throw new Error(err)
    }
  },
  async withdraw({ dispatch }, form) {
    try {
      const { data } = await base_bank_client.withdraw(form)
      const { message, success } = data

      if (success) {
        router.push({ name: 'rts-base' })
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

export const bank: Module<AllianceBankState, RootState> = {
  namespaced: true,
  actions
}
