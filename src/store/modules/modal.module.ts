export const modal = {
  namespaced: true,
  state: {
    show: false,
    text: null,
  },
  mutations: {
    setShow(state, show) {
      state.show = show;
    },
    setText(state, text) {
      state.text = text;
    },
  },
  actions: {
    hide({ commit }) {
      commit('setShow', false);
    },
    setText({ commit }, text) {
      commit('setText', text);
    },
    show({ commit }) {
      commit('setShow', true);
    },
  },
};
