import { Module } from 'vuex'
import { OnlineState, RootState } from '@/types'
import { actions } from './actions'

export const state: OnlineState = {
  all: []
}

const namespaced: boolean = true

export const online: Module<OnlineState, RootState> = {
  namespaced,
  state,
  actions
}
