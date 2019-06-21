<template>
  <div>
    <h1>Lobby</h1>

    <antro-table v-if="isPlaying">
      <template slot="caption"
        >Currently Playing</template
      >

      <template slot="header">
        <tr>
          <th class="string">Title</th>
          <th class="string">Start</th>
          <th class="string">End</th>
          <th class="string">Length</th>
          <th class="action"></th>
        </tr>
      </template>

      <template slot="body">
        <tr v-for="game in playing" :key="game.Game.id">
          <td class="string">{{ game.Game.title }}</td>
          <td class="string">{{ game.Game.start | TimeAgoInWords }}</td>
          <td class="string">{{ game.Game.end | TimeAgoInWords }}</td>
          <td class="string">
            {{ gameLength(game.Game.start, game.Game.end) }} days
          </td>
          <td class="action">
            <div @click="play(game.Game.id)">Play</div>
          </td>
        </tr>
      </template>
    </antro-table>

    <antro-table>
      <template slot="caption"
        >Live Games</template
      >

      <template slot="header">
        <tr>
          <th class="string">Title</th>
          <th class="string">Start</th>
          <th class="string">End</th>
          <th class="string">Length</th>
          <th class="action"></th>
        </tr>
      </template>

      <template slot="body">
        <tr v-for="game in current" :key="game.Game.id">
          <td class="string">{{ game.Game.title }}</td>
          <td class="string">{{ game.Game.start | TimeAgoInWords }}</td>
          <td class="string">{{ game.Game.end | TimeAgoInWords }}</td>
          <td class="string">
            {{ gameLength(game.Game.start, game.Game.end) }} days
          </td>
          <td class="action">
            <div
              v-if="inGameList.includes(game.Game.id)"
              @click="join(game.Game.id)"
            >
              Play
            </div>
            <div v-else>Join</div>
          </td>
        </tr>
      </template>
    </antro-table>
  </div>
</template>

<script>
// TODO: convert to ts
import { mapActions, mapState } from "vuex";
import TimeAgoInWords from "@/filters/timeAgoInWords";
import TimeLength from "@/filters/timeLength";
import AntroTable from "@/components/base/AntroTable";

export default {
  name: "Lobby",
  components: {
    AntroTable
  },
  filters: {
    TimeAgoInWords
  },
  created() {
    this.fetchGames();
  },
  computed: {
    ...mapState({
      current: state => state.games.current,
      upcoming: state => state.games.upcoming,
      playing: state => state.games.playing
    }),
    isPlaying() {
      return typeof this.playing !== "undefined";
    },
    inGameList() {
      const _items = [];

      this.current.forEach(game => {
        _items.push(game.Game.id);
      });

      return _items;
    }
  },
  methods: {
    ...mapActions({
      fetchGames: "games/fetch",
      playGame: "games/play"
    }),
    gameLength(start, end) {
      return TimeLength(start, end);
    },
    join(gameId) {
      this.$router.push({
        name: "usersgames-add",
        params: {
          gameId
        }
      });
    },
    play(gameId) {
      this.playGame({ gameId });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
