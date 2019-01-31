import units_client from '@/api/controllers/units.client';
import groupBy from 'lodash/groupBy';

export const units = {
  namespaced: true,
  state: {
    all: [],
  },
  mutations: {
    setAll(state, units) {
      state.all = units;
    },
  },
  actions: {
    fetch({ commit }) {
      return units_client.fetch().then(({ units }) => {
        commit('setAll', units);
      });
    },
  },
  getters: {
    orderByRace: state => {
      return groupBy(state.all, 'Race.name');
    },
    byRaceName: (state, getters) => name => {
      return getters.orderByRace[name];
    },
  },
};
