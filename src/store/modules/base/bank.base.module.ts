import base_bank_client from '@/api/controllers/rts/base/bank.base.client';
import router from '@/router';

export const bank = {
  namespaced: true,
  actions: {
    deposit({ dispatch }, Deposit) {
      return base_bank_client.deposit(Deposit).then(({ message, success }) => {
        if (success) {
          router.push({ name: 'rts-base' });
          dispatch('alert/success', message, { root: true });
        } else {
          dispatch('alert/error', message, { root: true });
        }
        dispatch('player/fetch', null, { root: true });
      });
    },
    withdraw({ dispatch }, Withdraw) {
      return base_bank_client
        .withdraw(Withdraw)
        .then(({ message, success }) => {
          if (success) {
            router.push({ name: 'rts-base' });
            dispatch('alert/success', message, { root: true });
          } else {
            dispatch('alert/error', message, { root: true });
          }
          dispatch('player/fetch', null, { root: true });
        });
    },
  },
};
