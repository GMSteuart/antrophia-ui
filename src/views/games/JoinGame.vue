<template>
  <div class="join-game centered">
    <antro-fieldset legen="Join Game" name="join-game">
      <select v-model="raceId">
        <option disabled value>Please select a race</option>
        <option
          v-for="race in gamesRaces"
          :key="race.Race.id"
          :value="race.Race.id"
        >{{ race.Race.name }}</option>
      </select>

      <antro-button
        class="btn--submit antro-btn"
        @click.native="doJoin"
      >Join Game</antro-button>
    </antro-fieldset>
    <router-link :to="{ name: 'lobby' }">Back to Lobby</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapState, createNamespacedHelpers } from 'vuex'
import AntroFieldset from '@/components/base/AntroFieldset.vue'
import AntroButton from '@/components/base/AntroButton.vue'
import { JoinGameForm, Race, RacesState } from '@/types'

const {
  mapActions: mapRacesActions,
  mapState: mapRacesState
} = createNamespacedHelpers('races')
const { mapActions: mapGamesActions } = createNamespacedHelpers('games')
const { mapActions: mapAlertActions } = createNamespacedHelpers('alert')
@Component({
  components: {
    AntroButton,
    AntroFieldset
  },
  computed: {
    ...mapRacesState({
      races: (state: RacesState) => state.all
    })
  },
  methods: {
    ...mapRacesActions({
      fetchRaces: 'fetch'
    }),
    ...mapGamesActions({
      joinGame: 'join'
    }),
    ...mapAlertActions({
      warning: 'warning'
    })
  }
})
export default class JoinGame extends Vue {
  name: string = 'JoinGame'
  raceId?: number = undefined

  races!: Race[]

  fetchRaces!: () => Race[]
  joinGame!: (payload: JoinGameForm) => void // todo: return success/error
  warning!: () => void

  get gamesRaces() {
    const _races: Race[] = []
    this.races.forEach(race => {
      if (race.name !== 'Zealot' && race.name !== 'Undying') {
        _races.push(race)
      }
    })

    return _races
  }
  created() {
    if (!this.races.length) {
      this.fetchRaces()
    }
  }

  async doJoin() {
    try {
      const gameId = Number(this.$route.params.gameId)
      const raceId = Number(this.raceId)
      await this.joinGame({
        gameId,
        raceId
      })
    } catch (err) {
      throw new Error(err)
    }
  }
}
</script>

<style lang="scss" scoped>
.join-game {
  width: 350px;
}
</style>
