<template>
  <div class="game-player-info">
    <antro-card>
      <template slot="caption">General</template>
      <template slot="body">
        <div class="stat-row">
          <antro-stat label="Rank" value="1"></antro-stat>
          <antro-stat label="Power" :value="player.UserGame.power"></antro-stat>
          <antro-stat label="Race" :value="player.Race.name"></antro-stat>
          <antro-stat label="Experience" :value="player.UserGame.experience"></antro-stat>
          <antro-stat label="Land" :value="Number(player.UserGame.land)"></antro-stat>
          <antro-stat label="Free Land" :value="player.UserGame.free_land"></antro-stat>
          <antro-stat label="Cardisium" :value="Number(player.UserGame.money)"></antro-stat>
          <antro-stat label="Bank" :value="player.UserGame.bank_money"></antro-stat>
          <antro-stat label="Population" :value="player.UserGame.population"></antro-stat>
          <antro-stat label="Rebels" :value="player.UserGame.rebels"></antro-stat>
          <antro-stat label="Scanners" :value="player.UserGame.scanners"></antro-stat>
          <antro-stat label="Protection" :value="protectionTime"></antro-stat>
          <antro-stat label="Wins" :value="player.UserGame.wins"></antro-stat>
          <antro-stat label="Losses" :value="player.UserGame.losses"></antro-stat>
          <antro-stat label="Bounty" :value="player.UserGame.bounty"></antro-stat>
        </div>
      </template>
    </antro-card>

    <antro-card>
      <template slot="caption">Buildings</template>
      <template slot="body">
        <div v-for="(buildings, buildingType, idx) in buildingsByType" :key="idx">
          <h5>{{ buildingType }}</h5>
          <div class="stat-row">
            <antro-stat
              v-for="building in buildings"
              :key="building.Building.id"
              :label="building.Building.name"
              :value="player.Buildings[building.Building.name].amount"
            ></antro-stat>
          </div>
        </div>
      </template>
    </antro-card>

    <antro-card>
      <template slot="caption">Resources</template>
      <template slot="body">
        <div v-for="(minerals, mineralType, idx) in mineralsByType" :key="idx">
          <h5>{{ mineralType }}</h5>
          <div class="stat-row">
            <antro-stat
              v-for="mineral in minerals"
              :key="mineral.Mineral.id"
              :label="mineral.Mineral.name"
              :value="player.Minerals[mineral.Mineral.name].amount"
            ></antro-stat>
          </div>
        </div>
      </template>
    </antro-card>

    <antro-card>
      <template slot="caption">Army</template>
      <template slot="body">
        <table>
          <tr v-for="unit in player.Units" :key="unit.Unit.id">
            <td
              style="color: orange"
            >{{ Math.round(100 * unit.amount * (unit.Unit.attack + unit.Unit.defense) / player.UserGame.power) }}</td>
            <antro-stat :label="unit.Unit.name" :value="unit.amount"></antro-stat>
          </tr>
        </table>
      </template>
    </antro-card>
  </div>
</template>

<script>
// TODO:: make the army card the army stacking component
import { mapGetters, mapActions, mapState } from "vuex";
import isEmpty from "lodash/isEmpty";
import numberFormat from "@/filters/numberFormat";

import AntroCard from "./base/AntroCard";
import AntroStat from "./base/AntroStat";

export default {
  name: "GamePlayerInfo",
  components: {
    AntroCard,
    AntroStat
  },
  filters: {
    numberFormat
  },
  computed: {
    ...mapGetters({
      buildingsByType: "buildings/orderByType",
      mineralsByType: "minerals/orderByType"
    }),
    ...mapState({
      player: state => state.player
    }),
    protectionTime() {
      return "todo";
    }
  },
  created() {
    if (isEmpty(this.buildingsByType)) {
      this.fetchBuildings();
    }

    if (isEmpty(this.mineralsByType)) {
      this.fetchMinerals();
    }
  },
  methods: {
    ...mapActions({
      fetchBuildings: "buildings/fetch",
      fetchMinerals: "minerals/fetch"
    })
  }
};
</script>

<style lang="scss" scoped>
.game-player-info {
  display: flex;
  flex-flow: column nowrap;
  margin-right: 5px;
  min-width: 9.5em; // gives enough width for 13 digits
}

.game-player-info--sub-caption {
  text-align: center;
}
.stat-row {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  padding: 0 5px;
}
</style>
