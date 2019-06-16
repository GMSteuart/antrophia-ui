import minerals_client from '@/api/controllers/minerals.client';
import groupBy from 'lodash/groupBy';

export const minerals = {
  namespaced: true,
  state: {
    all: [],
  },
  mutations: {
    setAll(state, minerals) {
      state.all = minerals;
    },
  },
  actions: {
    fetch({ commit }) {
      return minerals_client.fetch().then(({ minerals }) => {
        commit('setAll', minerals);
      });
    },
  },
  getters: {
    orderByType: state => {
      return groupBy(state.all, 'Type.name');
    },
  },
};
