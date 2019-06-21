import { ActionTree } from 'vuex'
import { PlayersState } from './types'
import { RootState } from '../../types'
import { crudActions } from '@/store/generators/crud-actions'

export const actions: ActionTree<PlayersState, RootState> = {
  ...crudActions<PlayersState, RootState>('players')
}
