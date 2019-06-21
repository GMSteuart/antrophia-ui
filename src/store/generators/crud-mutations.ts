import { nameHelper } from '@/store/helpers/name-helper'
import { MutationTree, Mutation } from 'vuex'
import { RootState } from '@/store/types'
import { CrudState } from '../types'

export function crudMutations<T>(entity: string): MutationTree<any> {
  return {
    [`${entity}/setAll`](state: RootState, payload: T[]) {
      ;(state[`${entity}`] as CrudState<T>).all = payload
    }
  }
}
