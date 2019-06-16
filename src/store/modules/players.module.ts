import users_games_client from '@/api/controllers/users_games.client';
import online_client from '@/api/controllers/rts/online.client';

import orderBy from 'lodash/orderBy';
import filter from 'lodash/filter';

export const players = {
  namespaced: true,
  state: {
    all: [],
    online: [],
  },
  mutations: {
    setAll(state, players) {
      state.all = players;
    },
    setOnline(state, players) {
      state.online = players;
    },
  },
  actions: {
    fetch({ commit }, game_id) {
      return users_games_client.fetch(game_id).then(({ players }) => {
        commit('setAll', players);
      });
    },
    online({ commit }) {
      return online_client.fetch().then(({ players, success }) => {
        if (success) {
          commit('setOnline', players);
        }
      });
    },
  },
  getters: {
    orderByBounty: state => dir => {
      if (typeof dir === 'undefined') {
        dir = 'asc';
      }

      return orderBy(
        filter(state.all, function(p) {
          return p.UserGame.bounty > 0;
        }),
        ['UserGame.bounty'],
        [dir]
      );
    },
    list: state => {
      let _list = {};

      state.all.forEach(player => {
        _list[player.UserGame.id] = player.UserGame.alias;
      });

      return _list;
    },
  },
};
