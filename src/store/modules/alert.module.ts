export const alert = {
  namespaced: true,
  state: {
    type: null,
    message: null,
    delay: 5000,
  },
  mutations: {
    success(state, message) {
      state.type = 'alert--success';
      state.message = message;
    },
    error(state, message) {
      state.type = 'alert--danger';
      state.message = message;
    },
    warning(state, message) {
      state.type = 'alert--warning';
      state.message = message;
    },
    clear(state) {
      state.type = null;
      state.message = null;
    },
  },
  actions: {
    success({ commit, state }, message) {
      commit('success', message);
      setTimeout(() => commit('clear'), state.delay);
    },
    error({ commit, state }, message) {
      commit('error', message);
      setTimeout(() => commit('clear'), state.delay);
    },
    warning({ commit, state }, message) {
      commit('warning', message);
      setTimeout(() => commit('clear'), state.delay);
    },
    clear({ commit }, message) {
      commit('clear', message);
    },
  },
};
