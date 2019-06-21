import bounties_client from '@/api/controllers/rts/bounties.client'
import { CrudState, RootState } from '../types'
import { Player } from './players/types'
import { Module, ActionTree, MutationTree } from 'vuex'
import { crudActions } from '../generators/crud-actions'
import { crudMutations } from '../generators/crud-mutations'

export interface BountiesState extends CrudState<Player> {}

export const state: BountiesState = {
  all: []
}

export const actions: ActionTree<BountiesState, RootState> = {
  ...crudActions('bounties'),
  async add({ dispatch }, form) {
    try {
      // TODO: refactor bounties_client
      const { data } = await bounties_client.add(form)
      const { message, success } = data

      if (success) {
        dispatch('alert/success', message, { root: true })
      } else {
        dispatch('alert/error', message, { root: true })
      }
      dispatch('player/fetch', null, { root: true })
      dispatch('fetch')
    } catch (err) {
      throw new Error(err)
    }
  }
}

export const mutations: MutationTree<BountiesState> = {
  ...crudMutations('bounties')
}

export const bounties: Module<BountiesState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
}
