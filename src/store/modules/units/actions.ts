import { ActionTree } from 'vuex'
import { RootState, UnitsState } from '@/types'
import { antrophiaApi } from '@/api/antrophia-api'

export const actions: ActionTree<UnitsState, RootState> = {
  async getAll({ commit }) {
    try {
      const { data } = await antrophiaApi.getAll('units')
      commit('setAll', data)
      commit('setRequestState', 'COMPLETE')
    } catch (err) {
      commit('setError', err)
      commit('setRequestState', 'ERROR')
    }
  }
}
