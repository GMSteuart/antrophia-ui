<template>
  <div>
    <antro-table>
      <template slot="caption">Bounties</template>

      <template slot="header">
        <tr>
          <th class="string">Rank</th>
          <th class="string">Name</th>
          <th class="string">Alliance</th>
          <th class="number">Power</th>
          <th class="number">Bounty</th>
        </tr>
      </template>

      <template slot="body">
        <tr v-for="(player, idx) in bounties" :key="idx">
          <td class="string">{{ idx + 1 }}</td>
          <td class="string">{{ player.UserGame.alias }}</td>
          <td
            v-if="Number(player.UserGame.alliance_id) !== 0"
            class="string"
          >{{ player.UserGame.alliance_id }}</td>
          <td v-else>n/a</td>
          <td class="number">{{ player.UserGame.power | numberFormat }}</td>
          <td class="number">{{ player.UserGame.bounty | numberFormat }}</td>
        </tr>
      </template>
    </antro-table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AntroTable from "@/components/base/AntroTable";
import numberFormat from "@/filters/numberFormat";

export default {
  name: "BountiesTable",
  components: {
    AntroTable
  },
  filters: {
    numberFormat
  },
  computed: {
    ...mapState({
      players: state => state.players.all,
      game_id: state => state.player.Game.id
    }),
    bounties() {
      return this.$store.getters["players/orderByBounty"]("asc");
    }
  },
  created() {
    if (!this.players.length) {
      this.fetchPlayers(this.game_id);
    }
  },
  methods: {
    ...mapActions({
      fetchPlayers: "players/fetch"
    })
  }
};
</script>

<style lang="scss">
</style>