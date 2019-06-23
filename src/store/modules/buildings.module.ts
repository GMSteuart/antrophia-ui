import groupBy from 'lodash/groupBy'
import { Building, BuildingsState, CrudState, RootState } from '@/types'
import { Module, ActionTree, MutationTree, GetterTree } from 'vuex'
import { crudActions } from '../generators/crud-actions'
import { crudMutations } from '../generators/crud-mutations'

export const state: BuildingsState = {
  all: []
}

export const actions: ActionTree<BuildingsState, RootState> = {
  ...crudActions('buildings')
}

export const mutations: MutationTree<BuildingsState> = {
  ...crudMutations('buildings')
}

export const getters: GetterTree<BuildingsState, RootState> = {
  orderByType: _state => {
    // TODO: can groupBy be optimized
    return groupBy(_state.all, 'Type.name')
  }
}

export const buildings: Module<BuildingsState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
}
