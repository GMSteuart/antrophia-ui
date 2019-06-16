import bounties_client from '@/api/controllers/rts/bounties.client';

export const bounties = {
  namespaced: true,
  state: {
    all: [],
  },
  mutations: {
    setAll(state, bounties) {
      state.all = bounties;
    },
  },
  actions: {
    fetch({ commit }) {
      return bounties_client.fetch().then(({ bounties }) => {
        commit('setAll', bounties);
      });
    },
    add({ dispatch }, Bounty) {
      return bounties_client.add(Bounty).then(({ message, success }) => {
        if (success) {
          dispatch('alert/success', message, { root: true });
        } else {
          dispatch('alert/error', message, { root: true });
        }
        dispatch('player/fetch', null, { root: true });
        dispatch('fetch');
      });
    },
  },
  getters: {},
};
