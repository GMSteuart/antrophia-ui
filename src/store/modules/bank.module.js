import bank_client from '@/api/controllers/rts/bank.client';
import router from '@/router';

export const bank = {
  namespaced: true,
  state: {
    info: null,
    recipients: [],
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    setRecipients(state, recipients) {
      state.recipients = recipients;
    },
  },
  actions: {
    fetch({ commit }) {
      return bank_client.fetchBankInfo().then(({ bank }) => {
        commit('setInfo', bank.info);
        commit('setRecipients', bank.recipients);
      });
    },
    deposit({ dispatch }, money) {
      return bank_client.bankDeposit(money).then(({ message, success }) => {
        if (success) {
          router.push({ name: 'rts-status' });
          dispatch('alert/success', message, { root: true });
        } else {
          dispatch('alert/error', message, { root: true });
        }
        dispatch('player/fetch', null, { root: true });
      });
    },
    withdraw({ dispatch }, money) {
      return bank_client.bankWithdraw(money).then(({ message, success }) => {
        if (success) {
          router.push({ name: 'rts-status' });
          dispatch('alert/success', message, { root: true });
        } else {
          dispatch('alert/error', message, { root: true });
        }
        dispatch('player/fetch', null, { root: true });
      });
    },
    transfer({ dispatch }, { amount, recipient_id }) {
      return bank_client
        .bankTransfer(amount, recipient_id)
        .then(({ message, success }) => {
          if (success) {
            router.push({ name: 'rts-status' });
            dispatch('alert/success', message, { root: true });
          } else {
            dispatch('alert/error', message, { root: true });
          }
          dispatch('player/fetch', null, { root: true });
        });
    },
  },
};
