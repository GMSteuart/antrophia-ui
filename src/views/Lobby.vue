<template>
  <div>
    <h1>Lobby</h1>

    <antro-table v-if="isPlaying">
      <template slot="caption">Currently Playing</template>

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
          <td
            class="string"
          >{{ gameLength(game.Game.start, game.Game.end) }} days</td>
          <td class="action">
            <div @click="play(game.Game.id)">Play</div>
          </td>
        </tr>
      </template>
    </antro-table>

    <antro-table>
      <template slot="caption">Live Games</template>

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
          <td
            class="string"
          >{{ gameLength(game.Game.start, game.Game.end) }} days</td>
          <td class="action">
            <div
              v-if="inGameList.includes(game.Game.id)"
              @click="join(game.Game.id)"
            >Play</div>
            <div v-else>Join</div>
          </td>
        </tr>
      </template>
    </antro-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState, createNamespacedHelpers } from 'vuex'
import TimeAgoInWords from '@/filters/timeAgoInWords'
import TimeLength from '@/filters/timeLength'
import AntroTable from '@/components/base/AntroTable.vue'
import Component from 'vue-class-component'
import { GamesState, RootState } from '@/types'
import { Game } from '../types/index'

const {
  mapActions: mapGamesActions,
  mapState: mapGamesState
} = createNamespacedHelpers('games')

@Component({
  components: {
    AntroTable
  },
  computed: {
    ...mapGamesState({
      current: (state: GamesState) => state.current,
      upcoming: (state: GamesState) => state.upcoming,
      playing: (state: GamesState) => state.playing
    })
  },
  filters: {
    TimeAgoInWords
  },
  methods: {
    ...mapActions({
      fetchGames: 'fetch',
      playGame: 'play'
    })
  }
})
export default class Lobby extends Vue {
  name = 'Lobby'

  current!: Game[]
  upcoming!: Game[]
  playing!: Game[]

  fetchGames!: () => void // todo: returns promise?
  playGame!: (gameId: number) => void // todo: returns promise?

  created() {
    this.fetchGames()
  }

  get isPlaying() {
    return typeof this.playing !== 'undefined'
  }

  gameLength(start: Date, end: Date) {
    return TimeLength(start, end)
  }

  /**
   * inGameList
   * TODO: how to optimize this with current games?
   * Determine if a plyer is currently in the game
   * @returns array: ids of games player is in
   */
  get inGameList() {
    const _items: number[] = []

    this.current.forEach(game => {
      _items.push(game.id)
    })

    return _items
  }

  join(gameId: number) {
    this.$router.push({ path: `/games/join/${gameId}` })
  }

  play(gameId: number) {
    this.playGame(gameId)
  }
}
</script>

<style lang="scss" scoped>
</style>
