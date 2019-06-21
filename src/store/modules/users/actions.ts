import { ActionTree } from 'vuex'
import { UsersState } from '@/types'
import { RootState } from '@/store/types'
import { crudActions } from '@/store/generators/crud-actions'

export const actions: ActionTree<UsersState, RootState> = {
  ...crudActions('users')
}
