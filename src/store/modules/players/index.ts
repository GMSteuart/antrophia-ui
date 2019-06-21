import { Module } from 'vuex'
import { RootState } from '@/store/types'
import { PlayersState } from './types'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

export const state: PlayersState = {
  all: []
}

const namespaced: boolean = true

export const players: Module<PlayersState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
  getters
}
