import games_client from '@/api/controllers/games.client'
import users_games_client from '@/api/controllers/users_games.client'
import router from '@/router'
import { Module, ActionTree, MutationTree } from 'vuex'
import { Game, GamesState, RootState } from '@/types'
import { antrophiaApi } from '@/api/antrophia-api'

export const state: GamesState = {
  current: [],
  upcoming: [],
  playing: []
}

export const actions: ActionTree<GamesState, RootState> = {
  async getAll({ commit, dispatch }) {
    try {
      const { data } = await antrophiaApi.getAll('games')
      const { current, upcoming, playing } = data

      commit('setCurrent', current)
      commit('setUpcoming', upcoming)
      commit('setPlaying', playing)
    } catch (err) {
      dispatch('alert/error', 'Could not retrieve games!', { root: true })
    }
  },
  async join({ dispatch }, { game_id, race_id }) {
    try {
      const { data } = await antrophiaApi.add('users_games', {
        game_id,
        race_id
      })
      const { message } = data
      // TODO: add success and test against it
      router.push('/lobby')
      dispatch('alert/success', message, { root: true })
    } catch (err) {
      throw new Error(err)
    }
  },
  async play({ dispatch }, { game_id }) {
    try {
      const { data } = await antrophiaApi.play(game_id)
      const { message } = data
      // TODO: add success and test against it
      dispatch('authentication/setCurrentGame', game_id, { root: true })
      dispatch('player/fetch', null, { root: true })
      dispatch('alert/success', message, { root: true })
      // todo: see if there is a better way to wait for game to be written to database
      setTimeout(() => router.push({ name: 'rts-status' }), 300)
    } catch (err) {
      throw new Error(err)
    }
  }
}

export const mutations: MutationTree<GamesState> = {
  setCurrent(_state, payload) {
    _state.current = payload
  },
  setUpcoming(_state, payload) {
    _state.upcoming = payload
  },
  setPlaying(_state, payload) {
    _state.playing = payload
  }
}

export const games: Module<GamesState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
}
