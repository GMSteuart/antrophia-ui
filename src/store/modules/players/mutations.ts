import { MutationTree } from 'vuex'
import { PlayersState, Player } from './types'
import { crudMutations } from '../../generators/crud-mutations'

export const mutations: MutationTree<PlayersState> = {
  ...crudMutations<Player>('players')
}
