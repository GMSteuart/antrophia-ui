import { MutationTree } from 'vuex'
import { User, UsersState } from '@/types'

export const mutations: MutationTree<UsersState> = {
  setRequestState(state, payload: string) {
    state.requestState = payload
  },
  setAll(state, payload: User[]) {
    state.all = payload
  },
  setError(state, payload: string) {
    state.error = payload
  }
}
