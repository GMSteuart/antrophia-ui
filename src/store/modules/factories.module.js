import factories_client from '@/api/controllers/rts/factories.client';
import router from '@/router';

export const factories = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    update({ dispatch }, Factory) {
      return factories_client.update(Factory).then(({ message, success }) => {
        if (success) {
          router.push({ name: 'rts-factories' });
          dispatch('alert/success', message, { root: true });
        } else {
          dispatch('alert/error', message, { root: true });
        }
        dispatch('player/fetch', null, { root: true });
      });
    },
  },
  getters: {},
};
