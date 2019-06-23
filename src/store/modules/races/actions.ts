import { ActionTree } from 'vuex'
import { RacesState, RootState } from '@/types'
import { antrophiaApi } from '@/api/antrophia-api'

export const actions: ActionTree<RacesState, RootState> = {
  async getAll({ commit }) {
    commit('setRequestState', 'PENDING')
    try {
      const { data } = await antrophiaApi.getAll('races')
      commit('setAll', data)
      commit('setRequestState', 'COMPLETE')
    } catch (err) {
      commit('setError', err)
      commit('setRequestState', 'ERROR')
    }
  }
}
