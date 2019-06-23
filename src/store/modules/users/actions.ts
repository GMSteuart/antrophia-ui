import { ActionTree } from 'vuex'
import { RootState, UsersState } from '@/types'
import { crudActions } from '@/store/generators/crud-actions'

export const actions: ActionTree<UsersState, RootState> = {
  ...crudActions('users')
}
