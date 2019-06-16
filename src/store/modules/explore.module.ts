import router from '@/router';
import explore_client from '@/api/controllers/rts/explore.client';

export const explore = {
  namespaced: true,
  state: {
    estimatedLandGain: 0,
  },
  mutations: {
    setEstimatedLandGain(state, amount) {
      state.estimatedLandGain = amount;
    },
  },
  actions: {
    calc({ commit }, Explore) {
      return explore_client.calc(Explore).then(({ amount }) => {
        commit('setEstimatedLandGain', amount);
      });
    },
    start({ dispatch }, Explore) {
      return explore_client.start(Explore).then(({ message, success }) => {
        if (success) {
          router.push({ name: 'rts-status' });
          dispatch('alert/success', message, { root: true });
        } else {
          dispatch('alert/error', message, { root: true });
        }
        dispatch('player/fetch', null, { root: true });
      });
    },
    cancel({ commit, dispatch }) {
      return explore_client.cancel().then(({ message, success }) => {
        if (success) {
          router.push({ name: 'rts-explore' });
          dispatch('alert/success', message, { root: true });
        } else {
          dispatch('alert/error', message, { root: true });
        }
        dispatch('player/fetch', null, { root: true });
        commit('setEstimatedLandGain', 0);
      });
    },
    finish({ commit, dispatch }) {
      return explore_client.finish().then(({ message, success }) => {
        if (success) {
          dispatch('alert/success', message, { root: true });
        } else {
          dispatch('alert/error', message, { root: true });
        }
        router.push({ name: 'rts-explore' });
        dispatch('player/fetch', null, { root: true });
        commit('setEstimatedLandGain', 0);
      });
    },
  },
  getters: {},
};
