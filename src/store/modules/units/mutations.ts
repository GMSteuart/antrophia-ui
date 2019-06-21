import { MutationTree } from 'vuex'
import { Unit, UnitsState } from './types'

export const mutations: MutationTree<UnitsState> = {
  setAll(state, payload: Unit[]) {
    state.all = payload
  }
}
