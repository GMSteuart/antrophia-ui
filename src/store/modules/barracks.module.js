import barracks_client from '@/api/controllers/rts/barracks.client';
import router from '@/router';

export const barracks = {
  namespaced: true,
  state: {
    cost: null,
    time: null,
  },
  mutations: {
    setCost(state, cost) {
      state.cost = cost;
    },
    setTime(state, time) {
      state.time = time;
    },
  },
  actions: {
    disband({ dispatch }, Barracks) {
      return barracks_client.disband(Barracks).then(({ message, success }) => {
        if (success) {
          dispatch('alert/success', message, { root: true });
        } else {
          dispatch('alert/error', message, { root: true });
        }
        router.push({ name: 'rts-barracks-disband' });
        dispatch('player/fetch', null, { root: true });
      });
    },
    finish({ dispatch }) {
      return barracks_client.finish().then(({ message, success }) => {
        if (success) {
          dispatch('alert/success', message, { root: true });
        } else {
          dispatch('alert/error', message, { root: true });
        }
        router.push({ name: 'rts-barracks' });
        dispatch('player/fetch', null, { root: true });
      });
    },
    start({ dispatch }, Barracks) {
      return barracks_client.start(Barracks).then(({ message, success }) => {
        if (success) {
          router.push({ name: 'rts-status' });
          dispatch('alert/success', message, { root: true });
        } else {
          dispatch('alert/error', message, { root: true });
        }
        dispatch('player/fetch', null, { root: true });
      });
    },
    calc({ commit }, Barracks) {
      return barracks_client.calc(Barracks).then(({ time, cost }) => {
        commit('setTime', time);
        commit('setCost', cost);
      });
    },
    reorder({ dispatch }, stack) {
      return barracks_client.reorder(stack).then(() => {
        dispatch('player/fetch', null, { root: true });
      });
    },
  },
  getters: {},
};
