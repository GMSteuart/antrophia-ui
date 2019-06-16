import alliances_client from '@/api/controllers/rts/alliances.client';
import router from '@/router';

export const alliances = {
  namespaced: true,
  state: {
    all: [],
    active: null,
  },
  mutations: {
    setActive(state, alliance) {
      state.active = alliance;
    },
    setAlliances(state, alliances) {
      state.all = alliances;
    },
  },
  actions: {
    fetch({ commit }) {
      return alliances_client
        .fetch()
        .then(({ alliances }) => commit('setAlliances', alliances));
    },
    create({ dispatch }, { name, password, password_confirm, info }) {
      alliances_client
        .add(name, password, password_confirm, info)
        .then(({ message }) => {
          router.push({ name: 'rts-base' });
          dispatch('alert/success', message, { root: true });
        });
    },
    join({ dispatch }, { alliance_id, password }) {
      alliances_client.join(alliance_id, password).then(({ message }) => {
        router.push({ name: 'rts-base' });
        dispatch('alert/success', message, { root: true });
      });
    },
    view({ commit }, alliance_id) {
      alliances_client.view(alliance_id).then(({ alliance }) => {
        commit('setActive', alliance);
      });
    },
  },
};
