import { PlayerState, RootState } from '@/types'
import { Module } from 'vuex'
import { actions } from './actions'
import { getters } from './getters'
// Player Modulesx
import { barracks } from './modules/barracks.module'
import { build } from './modules/build.module'
import { explore } from './modules/explore.module'
import { factories } from './modules/factories.module'

export const state: PlayerState = {}

const namespaced: boolean = true

export const player: Module<PlayerState, RootState> = {
  namespaced,
  state,
  actions,
  getters
  // TODO: implement player relationships as submodules of player
  modules: {
    barracks,
    build,
    explore,
    factories
  }
}
