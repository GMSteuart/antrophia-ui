import build_client from '@/api/controllers/rts/build.client';
import router from '@/router';

export const build = {
  namespaced: true,
  state: {
    buildings: null,
    cost: null,
    free_land: null,
    land_used: null,
    time: null,
  },
  mutations: {
    setBuildings(state, buildings) {
      state.buildings = buildings;
    },
    setCost(state, cost) {
      state.cost = cost;
    },
    setFreeLand(state, free_land) {
      state.free_land = free_land;
    },
    setLandUsed(state, land_used) {
      state.land_used = land_used;
    },
    setTime(state, time) {
      state.time = time;
    },
  },
  actions: {
    start({ dispatch }, Build) {
      return build_client.start(Build).then(({ message, success }) => {
        if (success) {
          router.push({ name: 'rts-status' });
          dispatch('alert/success', message, { root: true });
        } else {
          dispatch('alert/error', message, { root: true });
        }
        dispatch('player/fetch', null, { root: true });
      });
    },
    calc({ commit }, Build) {
      return build_client
        .calc(Build)
        .then(({ time, cost, land_used, free_land }) => {
          commit('setCost', cost);
          commit('setFreeLand', free_land);
          commit('setLandUsed', land_used);
          commit('setTime', time);
        });
    },
    cancel({ dispatch }) {
      return build_client.cancel().then(({ message, success }) => {
        if (success) {
          router.push({ name: 'rts-build' });
          dispatch('alert/success', message, { root: true });
        } else {
          dispatch('alert/error', message, { root: true });
        }
        dispatch('player/fetch', null, { root: true });
      });
    },
    finish({ dispatch }) {
      return build_client.finish().then(({ message, success }) => {
        if (success) {
          dispatch('alert/success', message, { root: true });
        } else {
          dispatch('alert/error', message, { root: true });
        }
        router.push({ name: 'rts-build' });
        dispatch('player/fetch', null, { root: true });
      });
    },
  },
};
