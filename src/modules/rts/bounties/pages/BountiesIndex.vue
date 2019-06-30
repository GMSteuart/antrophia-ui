<template>
  <div>
    <h3>Bounties</h3>
    <p>
      Here is a list of players who currently have a bounty on their head. If you would like put money on someones head
      you can use the form below. Bounties are claimed automatically when you destroy more than 35% of the players
      power who has the bounty on their head.
    </p>
    <bounties-table v-if="bounties.length"></bounties-table>
    <p v-else class="warning">There appears to be no one with bounties on their head!</p>

    <bounty-add-form></bounty-add-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapState } from "vuex";
import BountiesTable from "../components/BountiesTable";
import BountyAddForm from "../components/BountyAddForm";

export default {
  name: "BountiesIndex",
  components: {
    BountiesTable,
    BountyAddForm
  },
  computed: {
    ...mapState({
      game_id: state => state.player.Game.id,
      players: state => state.players.all
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

<style lang="scss" scoped>
</style>