<template>
  <div>
    <antro-card>
      <template slot="caption">Economy</template>
      <template slot="body">
        <div class="stat-row">
          <antro-stat label="Current Population" :value="player.UserGame.population"></antro-stat>
          <!-- <antro-stat label="Current Water" :value="player.Minerals.Water.amount"></antro-stat> -->
          <antro-stat
            :label="'Pop. Inc. Next ' + nextTime"
            :value="player.UserGame.population_increase_per_tick"
          ></antro-stat>
          <antro-stat label="Max Population" :value="player.UserGame.max_population"></antro-stat>

          <antro-stat
            label="Max Fed Population"
            :value="player.UserGame.max_fed_population"
          >{{ player.UserGame.max_fed_population - player.UserGame.population }}</antro-stat>
          <antro-stat label="Max Bank Cardisium" :value="player.UserGame.max_bank_cardisium"></antro-stat>

          <antro-stat
            label="Max Policed Population"
            :value="player.UserGame.max_policed_population"
          ></antro-stat>
          <antro-stat
            label="Max Watered Population"
            :value="player.UserGame.max_watered_population"
          ></antro-stat>
          <antro-stat
            :label="'Bank Interest Next ' + nextTime"
            :value="player.UserGame.bank_interest_increase_per_tick"
          ></antro-stat>
        </div>
      </template>
    </antro-card>

    <antro-card>
      <template slot="caption">Military</template>
      <template slot="body">
        <div class="stat-row">
          <antro-stat
            label="Star Wars % To Destroy Missiles"
            :value="player.UserGame.star_wars_chance_to_destroy_missiles * 100"
          >%</antro-stat>
          <antro-stat
            :label="'Rebels Increase Next ' + nextTime"
            :value="player.UserGame.rebels_increase_per_tick"
          ></antro-stat>
          <antro-stat label="Last Rebel Raid" :value="player.UserGame.last_raid"></antro-stat>
          <antro-stat label="LRC Shots Fired" :value="lrcShots"></antro-stat>
          <antro-stat label="Max Opponent Power" :value="player.UserGame.max_opponent_power"></antro-stat>
          <antro-stat label="Min Opponent Power" :value="player.UserGame.min_opponent_power"></antro-stat>
          <antro-stat label="Combat Science Bonus" :value="player.UserGame.combat_bonus"></antro-stat>
          <antro-stat
            :label="'Army Upkeep Cost Next ' + nextTime"
            :value="player.UserGame.army_upkeep_cost_per_tick"
          ></antro-stat>
        </div>
      </template>
    </antro-card>

    <antro-card>
      <template slot="caption">Finish Times</template>
      <template slot="body">
        <div class="stat-row">
          <antro-stat label="Barracks" :value="barracksFinishTime"></antro-stat>
          <antro-stat label="Build" :value="buildFinishTime"></antro-stat>
          <antro-stat label="Explore" :value="exploreFinishTime"></antro-stat>
          <antro-stat label="Science" :value="scienceFinishTime"></antro-stat>
          <antro-stat label="Spies" :value="spiesFinishTime"></antro-stat>
          <antro-stat label="LRC" :value="lrcFinishTime"></antro-stat>
        </div>
      </template>
    </antro-card>

    <antro-card>
      <template slot="caption">Resources</template>
      <template slot="body">
        <div class="stat-row">
          <antro-stat
            :label="'Cardisium Increase Next ' + nextTime"
            :value="player.UserGame.cardisium_increase_per_tick"
          ></antro-stat>
          <antro-stat
            :label="'Missile Increase Next ' + nextTime"
            :value="player.UserGame.missiles_increase_per_tick"
          ></antro-stat>
          <antro-stat
            :label="'Energy Increase Next ' + nextTime"
            :value="player.UserGame.energy_increase_per_tick"
          ></antro-stat>
          <antro-stat
            :label="'Food Increase Next ' + nextTime"
            :value="player.UserGame.food_increase_per_tick"
          ></antro-stat>
          <antro-stat
            :label="'Water Increase Next ' + nextTime"
            :value="player.UserGame.water_increase_per_tick"
          ></antro-stat>
          <antro-stat
            :label="'Scanner Increase Next ' + nextTime"
            :value="player.UserGame.scanner_increase_per_tick"
          ></antro-stat>
        </div>
        <div class="stat-row stat-row--minerals">
          <antro-stat :label="'Mineral Increase Next ' + nextTime" class="row--label"></antro-stat>
          <div class="row--minerals">
            <antro-stat
              v-for="(increase, mineral, idx) in player.UserGame.mineral_increase_per_tick"
              :key="idx"
              :label="mineral"
              :value="increase"
            ></antro-stat>
          </div>
        </div>
      </template>
    </antro-card>
  </div>
</template>

<script>
// TODO: convert finish times to countdowns
import moment from "moment";
import { mapState } from "vuex";
import timeRemaining from "@/filters/timeRemaining";
import isEmpty from "lodash/isEmpty";
import AntroStat from "@/components/base/AntroStat";
import AntroCard from "@/components/base/AntroCard";

import numberFormat from "@/filters/numberFormat";

export default {
  name: "StatusIndex",
  components: {
    AntroStat,
    AntroCard
  },
  filters: {
    numberFormat
  },
  computed: {
    ...mapState({
      player: state => state.player
    }),
    barracksFinishTime() {
      if (isEmpty(this.player.Barracks)) {
        return "No barracks training!";
      }

      if (this.player.Barracks.end.getTime() < new Date()) {
        return "Finished!";
      }

      return this.player.Barracks.end.getTime() - new Date();
    },
    buildFinishTime() {
      if (isEmpty(this.player.Build)) {
        return "No construction!";
      }

      if (moment.utc(this.player.Build.end) < moment.utc()) {
        return "Finished!";
      }

      return timeRemaining(this.player.Build.end);
    },
    exploreFinishTime() {
      if (isEmpty(this.player.Explore)) {
        return "No exploration!";
      }

      if (this.player.Explore.end.getTime() < new Date()) {
        return "Finished!";
      }

      return this.player.Explore.end.getTime() - new Date();
    },
    lrcFinishTime() {
      if (isEmpty(this.player.Alliance)) {
        return "Not in an alliance!";
      }

      if (isEmpty(this.player.Alliance.Lrc)) {
        return "No LRC constructed!";
      }

      if (this.player.Alliance.Lrc.shots_fired) {
        return "Firing!";
      }

      return "Construction Phase";
    },
    lrcShots() {
      if (isEmpty(this.player.Alliance)) {
        return "n/a";
      }
      return this.player.Alliance.Lrc.shots_fired;
    },
    nextTime() {
      if (this.player.Game.speedfactor > 30) {
        return Math.round(30 / this.player.Game.speedfactor) + " sec";
      }
      return Math.round(30 / this.player.Game.speedfactor) + " min";
    },
    scienceFinishTime() {
      if (isEmpty(this.player.Research)) {
        return "No research!";
      }

      if (this.player.Research.end.getTime() < new Date()) {
        return "Finished!";
      }

      return this.player.Research.end.getTime() - new Date();
    },
    spiesFinishTime() {
      if (isEmpty(this.player.Spies)) {
        return "No spy training!";
      }

      if (this.player.Spies.end.getTime() < new Date()) {
        return "Finished!";
      }

      return this.player.Spies.end.getTime() - new Date();
    }
  }
};
</script>

<style lang="scss" scoped>
.stat-row {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 5px;
  background-color: $kilamanjaro;
}

tbody .stat-row:last-child {
  border-bottom-left-radius: $border-radius;
  border-bottom-right-radius: $border-radius;
}

.stat-row--minerals {
  display: flex;
  flex-flow: column nowrap;

  .row--label {
    grid-area: label;
  }
  .row--minerals {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
}
</style>