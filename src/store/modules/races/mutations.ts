import { MutationTree } from 'vuex'
import { Race, RacesState } from '@/types'

export const mutations: MutationTree<RacesState> = {
  setAll(state, payload: Race[]) {
    state.all = payload
  }
}
