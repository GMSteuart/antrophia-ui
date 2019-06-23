import { Module } from 'vuex'
import { RootState, UsersState } from '@/types'
import { actions } from './actions'
import { mutations } from './mutations'

export const state: UsersState = {
  all: [],
  requestState: 'NONE',
  error: ''
}

const namespaced: boolean = true

export const users: Module<UsersState, RootState> = {
  namespaced,
  state,
  actions,
  mutations
}
