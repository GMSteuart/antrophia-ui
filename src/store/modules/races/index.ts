import { Module } from 'vuex'
import { RootState } from '@/store/types'
import { RacesState } from './types'
import { actions } from './actions'
import { mutations } from './mutations'

export const state: RacesState = {
  all: []
}

const namespaced: boolean = true

export const races: Module<RacesState, RootState> = {
  namespaced,
  state,
  actions,
  mutations
}
