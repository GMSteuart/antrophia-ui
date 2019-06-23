import { MutationTree } from 'vuex'
import { OnlineState } from '@/types'
import { crudMutations } from '@/store/generators/crud-mutations'

export const mutations: MutationTree<OnlineState> = {
  ...crudMutations('online')
}
