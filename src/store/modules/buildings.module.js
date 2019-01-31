import groupBy from 'lodash/groupBy';
import buildings_client from '@/api/controllers/buildings.client';

export const buildings = {
  namespaced: true,
  state: {
    all: [],
  },
  mutations: {
    setAll(state, buildings) {
      state.all = buildings;
    },
  },
  actions: {
    fetch({ commit }) {
      return buildings_client.fetch().then(({ buildings }) => {
        commit('setAll', buildings);
      });
    },
  },
  getters: {
    orderByType: state => {
      return groupBy(state.all, 'Type.name');
    },
  },
};
