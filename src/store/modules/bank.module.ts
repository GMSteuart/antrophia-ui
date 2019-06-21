import bank_client from '@/api/controllers/rts/bank.client'
import router from '@/router'
import { BankState } from '../../types/index'
import { Module, ActionTree, MutationTree } from 'vuex'
import { RootState } from '../types'
import { mutations } from './player/mutations'

// TODO: move to submodule of player as well as related player actions
export const state: BankState = {
  info: null,
  recipients: []
}

export const actions: ActionTree<BankState, RootState> = {
  async fetch({ commit }) {
    try {
      const { data } = await bank_client.fetch()
      const { info, recipients } = data

      commit('setInfo', info)
      commit('setRecipients', recipients)
    } catch (err) {
      throw new Error(err)
    }
  },
  async deposit({ dispatch }, money) {
    try {
      const { data } = await bank_client.deposit(money)
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
  async withdraw({ dispatch }, money) {
    try {
      const { data } = await bank_client.withdraw(money)
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
  async transfer({ dispatch }, { amount, recipient_id }) {
    try {
      const { data } = await bank_client.transfer(amount, recipient_id)
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
  }
}

export const mutation: MutationTree<BankState> = {
  setInfo(_state, info) {
    _state.info = info
  },
  setRecipients(_state, recipients) {
    _state.recipients = recipients
  }
}

export const bank: Module<BankState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
}
