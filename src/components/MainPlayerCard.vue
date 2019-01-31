<template>
  <div class="main-player-card">
    <div class="player-title" @click="viewProfile">{{ player.UserGame.alias }}</div>
    <div class="player-toolbar">
      <font-awesome-icon :icon="faEnvelope" class="antro-icon"></font-awesome-icon>
      <font-awesome-icon :icon="faCog" class="antro-icon"></font-awesome-icon>
      <font-awesome-icon :icon="faSignOut" class="antro-icon" @click="logout"></font-awesome-icon>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCog, faEnvelope, faSignOut } from "@fortawesome/pro-light-svg-icons";

export default {
  name: "MainPlayerCard",
  components: {
    FontAwesomeIcon
  },
  computed: {
    player() {
      return this.$store.state.player;
    }
  },
  data() {
    return {
      faCog,
      faEnvelope,
      faSignOut
    };
  },
  methods: {
    logout() {
      // todo: implement logout functionality
    },
    viewProfile() {
      this.$router.push("/profile");
    }
  }
};
</script>

<style lang="scss" scoped>
.main-player-card {
  display: flex;
  flex-flow: column nowrap;
  margin-right: 5px;

  .player-toolbar {
    display: flex;
    flex-flow: row nowrap;
  }
}
</style>