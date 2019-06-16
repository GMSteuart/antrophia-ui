import bonus_client from '@/api/controllers/rts/bonus.client';
import status_client from '@/api/controllers/rts/status.client';

import router from '@/router';

export const player = {
  namespaced: true,
  state: {
    nextTime: '',

    Barracks: {},
    Build: {},
    Buildings: {},
    Explore: {},
    Factory: {},
    Game: {},
    Labs: {},
    Minerals: {},
    Mines: {},
    Race: {},
    Retals: {},
    Units: {},
    UserGame: {},
  },
  mutations: {
    setBonus(state, bonus) {
      state.bonus = bonus;
    },
    setNextTime(state, nextTime) {
      state.nextTime = nextTime;
    },
    setPlayer(state, player) {
      // Iterate over the properties in the state because its everything thats expected
      for (var property in state) {
        if (state.hasOwnProperty(property)) {
          // Ff the player object has it, then lets set them equal
          if (player.hasOwnProperty(property)) {
            state[property] = player[property];
          } else {
            // Otherwise we will set it to null. This helps with finishing builds, research, etc.
            state[property] = null;
          }
        }
      }
    },
  },
  actions: {
    claimBonus({ dispatch }) {
      return bonus_client.claim().then(({ link, success, message }) => {
        if (success) {
          window.open(link, '_blank');
          window.focus(); // bring focus back to antrophia
          dispatch('alert/success', message, { root: true });
          router.push({ name: 'rts-status' });
        } else {
          dispatch('alert/error', message, { root: true });
        }
        dispatch('fetch');
      });
    },
    fetch({ commit, dispatch }) {
      return status_client
        .fetch()
        .then(({ nextTime, player }) => {
          commit('setNextTime', nextTime);
          commit('setPlayer', player);
        })
        .catch(error => {
          // TODO: properly handle error
          dispatch('alert/error', error, { root: true });
          router.push({ name: 'lobby' });
        });
    },
  },
};
