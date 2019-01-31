<template>
  <div class="game-nav">
    <router-link :to="{ name: 'rts-alliances' }">Alliances</router-link>
    <router-link v-if="Number(buildings['Banks'].amount)" :to="{ name: 'rts-bank' }">Bank</router-link>
    <router-link v-if="Number(player.UserGame.alliance_id)" :to="{ name: 'rts-base' }">Base</router-link>
    <router-link v-if="Number(buildings['Barracks'].amount)" :to="{ name: 'rts-barracks' }">Barracks</router-link>
    <router-link v-if="player.UserGame.bonus_info.claimable" :to="{ name: 'rts-bonus' }">Bonus</router-link>
    <router-link :to="{ name: 'rts-bounties' }">Bounties</router-link>
    <router-link :to="{ name: 'rts-build' }">Build</router-link>
    <router-link
      v-if="Number(buildings['Barracks'].amount)"
      :to="{ name: 'rts-barracks-disband' }"
    >Disband</router-link>
    <router-link :to="{ name: 'rts-explore' }">Explore</router-link>
    <router-link
      v-if="Number(buildings['Factories'].amount)"
      :to="{ name: 'rts-factories' }"
    >Factories</router-link>
    <router-link :to="{ name: 'rts-market' }">Market</router-link>
    <router-link :to="{ name: 'rts-messages' }">Messages (0)</router-link>
    <router-link :to="{ name: 'rts-mines' }">Mines</router-link>
    <router-link :to="{ name: 'rts-missiles' }">Missiles</router-link>
    <router-link :to="{ name: 'rts-news' }">News</router-link>
    <router-link :to="{ name: 'rts-online' }">Online</router-link>
    <router-link :to="{ name: 'rts-rankings' }">Rankings</router-link>
    <router-link :to="{ name: 'rts-labs' }">Science Labs</router-link>
    <router-link :to="{ name: 'rts-shops' }">Shops</router-link>
    <router-link :to="{ name: 'rts-spies' }">Spies</router-link>
    <router-link :to="{ name: 'rts-barracks-stacking' }">Stacking</router-link>
    <router-link :to="{ name: 'rts-status' }">Status</router-link>
    <router-link :to="{ name: 'rts-war' }">War</router-link>

    <!--<div class="game-nav__seperator"></div>-->
    <!--<router-link to="/lobby">Lobby</router-link>-->
    <!--<router-link to="/profile">Profile</router-link>-->
    <!--<router-link to="/settings">Settings</router-link>-->
    <!--<router-link to="/logout">Logout</router-link>-->
  </div>
</template>

<script>
import { mapState } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHandsHelping, faPiggyBank } from "@fortawesome/pro-light-svg-icons";

export default {
  name: "GameNav",
  components: {
    FontAwesomeIcon
  },
  computed: {
    ...mapState({
      player: state => state.player,
      buildings: state => state.player.Buildings
    }),
    iconSize() {
      return "md";
    }
  },
  data() {
    return {
      faHandsHelping,
      faPiggyBank,
      tabs: ["Player", "Alliance"],
      links: [
        { name: "rts-alliances" },
        { name: "rts-bank", requires: "Buildings/Banks/amount" },
        { name: "rts-base", requires: "UserGame/alliance_id" }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.game-nav {
  min-width: 7.5em;
}

a {
  font-size: 1rem;
  margin: 3px 0;
  font-weight: 100;

  &.router-link-exact-active {
    color: $yellow;
  }
}

a,
a:focus {
  color: $orange;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  color: $yellow;
  text-decoration: none;
}

@media (orientation: landscape) {
  .game-nav {
    display: flex;
    flex-flow: column nowrap;
    margin-left: 5px;
  }
}
</style>