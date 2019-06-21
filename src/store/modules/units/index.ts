import { Module } from 'vuex'
import { RootState } from '@/store/types'
import { UnitsState } from './types'
import { mutations } from './mutations'

export const state: UnitsState = {
  all: []
}

const namespaced: boolean = true

export const units: Module<UnitsState, RootState> = {
  namespaced,
  state,
  mutations
}