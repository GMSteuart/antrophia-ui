import groupBy from 'lodash/groupBy'
import buildings_client from '@/api/controllers/buildings.client'
import { CrudState, RootState } from '../types'
import { Module, ActionTree, MutationTree, GetterTree } from 'vuex'
import { crudActions } from '../generators/crud-actions'
import { crudMutations } from '../generators/crud-mutations'

export interface Building {
  id: number
}

export interface BuildingsState extends CrudState<Building> {}

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
  orderByType: state => {
    // TODO: can groupBy be optimized
    return groupBy(state.all, 'Type.name')
  }
}

export const buildings: Module<BuildingsState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
}
