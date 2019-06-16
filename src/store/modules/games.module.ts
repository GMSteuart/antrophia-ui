import games_client from '@/api/controllers/games.client';
import users_games_client from '@/api/controllers/users_games.client';
import router from '@/router';

export const games = {
  namespaced: true,
  state: {
    current: [],
    upcoming: [],
    playing: [],
  },
  actions: {
    fetch({ commit, dispatch }) {
      return games_client
        .fetch()
        .then(({ current, upcoming, playing }) => {
          commit('setCurrent', current);
          commit('setUpcoming', upcoming);
          commit('setPlaying', playing);
        })
        .catch(() => {
          dispatch('alert/error', 'Could not retrieve games!', { root: true });
        });
    },
    join({ dispatch }, { game_id, race_id }) {
      return users_games_client.add(game_id, race_id).then(({ message }) => {
        // TODO: add success and test against it
        router.push('/lobby');
        dispatch('alert/success', message, { root: true });
      });
    },
    play({ dispatch }, { game_id }) {
      return games_client.play(game_id).then(({ message }) => {
        // TODO: add success and test against it
        dispatch('authentication/setCurrentGame', game_id, { root: true });
        dispatch('player/fetch', null, { root: true });
        dispatch('alert/success', message, { root: true });
        // todo: see if there is a better way to wait for game to be written to database
        setTimeout(() => router.push({ name: 'rts-status' }), 300);
      });
    },
  },
  mutations: {
    setCurrent(state, games) {
      state.current = games;
    },
    setUpcoming(state, upcomingGames) {
      state.upcoming = upcomingGames;
    },
    setPlaying(state, playingGames) {
      state.playing = playingGames;
    },
  },
};
