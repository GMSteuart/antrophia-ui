import { ActionTree } from 'vuex'
import { PlayerState } from './types'
import { RootState } from '../../types'
import router from '@/router';
import { antrophiaApi } from '@/api/antrophia-api';

export const actions: ActionTree<PlayerState, RootState> = {
  // TODO: move bonus into a submodule of player
  async claimBonus({ dispatch }) {
    try {
      const { data } = await antrophiaApi.add('bonus', {})
      // TODO: match reeponse to Bonus interface
      const { link, success, message } = data

      if (success) {
          window.open(link, '_blank')
          window.focus() // bring focus back to antrophia
          dispatch('alert/success', message, { root: true })
          router.push({ name: 'rts-status' })
      } else {
        throw new Error(message)
      }
      dispatch('fetch')
    } catch (err) {
      dispatch('alert/error', err, { root: true })
    }
  },
    async fetch({ commit, dispatch }) {
      try {
        const { data } = await antrophiaApi.getAll('status')
        // TODO: implement response to match Playser interface
        const { nextTime, player } = data
        commit('setNextTime', nextTime)
          commit('setPlayer', player)
      } catch (err) {
        dispatch('alert/error', err, { root: true })
        router.push({ name: 'lobby' })
      }
    }
  }
}
