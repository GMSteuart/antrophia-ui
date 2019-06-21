import { PlayerState } from './types'
import { Module } from 'vuex'
import { RootState } from '../../types'

export const state: PlayerState = {}

const namespaced: boolean = true

export const player: Module<PlayerState, RootState> = {
  namespaced,
  state
}
