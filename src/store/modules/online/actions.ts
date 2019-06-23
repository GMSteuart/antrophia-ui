import { ActionTree } from 'vuex'
import { crudActions } from '@/store/generators/crud-actions'
import { OnlineState, RootState } from '@/types'

export const actions: ActionTree<OnlineState, RootState> = {
  ...crudActions('online')
}
