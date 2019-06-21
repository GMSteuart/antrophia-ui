import { ActionTree } from 'vuex'
import { RootState } from '../../types'
import { crudActions } from '@/store/generators/crud-actions'
import { OnlineState } from './types'

export const actions: ActionTree<OnlineState, RootState> = {
  ...crudActions('online')
}
