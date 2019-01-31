import races_client from '@/api/controllers/races.client';

export const races = {
  namespaced: true,
  state: {
    all: [],
  },
  mutations: {
    setAll(state, races) {
      state.all = races;
    },
  },
  actions: {
    fetch({ commit }) {
      return races_client.fetch().then(({ races }) => {
        commit('setAll', races);
      });
    },
  },
};
