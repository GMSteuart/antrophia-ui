import base_client from '@/api/controllers/rts/base.client';
import { bank } from './base/bank.base.module';

export const base = {
  namespaced: true,
  state: {
    Alliance: {},
    Build: {},
    Coleader: {},
    ConfirmedRelations: [],
    InitiatedRelations: [],
    Leader: {},
    Lrc: {},
    Member: [],
    News: [],
    RequestedRelations: [],
  },
  mutations: {
    setAlliance(state, alliance) {
      // Iterate over the properties in the state because its everything thats expected
      for (var property in state) {
        if (state.hasOwnProperty(property)) {
          // Ff the player object has it, then lets set them equal
          if (alliance.hasOwnProperty(property)) {
            state[property] = alliance[property];
          } else {
            // Otherwise we will set it to null. This helps with finishing builds, research, etc.
            state[property] = null;
          }
        }
      }
    },
  },
  actions: {
    fetch({ commit }) {
      return base_client.fetch().then(({ alliance }) => {
        commit('setAlliance', alliance);
      });
    },
  },
  getters: {},
  modules: {
    bank,
  },
};
