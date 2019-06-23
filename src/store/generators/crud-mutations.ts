import { MutationTree } from 'vuex'
import { CrudState, RootState } from '@/types'

export function crudMutations<T>(entity: string): MutationTree<any> {
  return {
    [`${entity}/setAll`](state: RootState, payload: T[]) {
      ;(state[`${entity}`] as CrudState<T>).all = payload
    }
  }
}
