import { ActionTree } from 'vuex'
import { antrophiaApi } from '@/api/antrophia-api'

// TODO: type this
export function crudActions<State, RootState>(
  entity: string
): ActionTree<State, RootState> {
  return {
    async [`${entity}/getAll`]({ commit }) {
      commit('setRequestState', 'PENDING')
      try {
        const { data } = await antrophiaApi.getAll(entity)
        commit('setAll', data)
        commit('setRequestState', 'COMPLETE')
      } catch (err) {
        commit('setError', err)
        commit('setRequestState', 'ERROR')
      }
    }
  }
}
