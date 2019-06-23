import { PlayerState, RootState } from '@/types'
import { Module } from 'vuex'

export const state: PlayerState = {}

const namespaced: boolean = true

export const player: Module<PlayerState, RootState> = {
  namespaced,
  state
}
