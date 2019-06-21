<template>
  <div>
    <div class="layout game">
      <div class="game-title">{{ player.Game.title }}</div>

      <game-page-title></game-page-title>

      <main-player-card></main-player-card>

      <game-nav class="game-nav"></game-nav>

      <div class="game-view">
        <transition
          @beforeEnter="beforeEnterPage"
          @enter="enterPage"
          @leave="leavePage"
          :css="false"
        >
          <slot></slot>
        </transition>
      </div>

      <game-player-info></game-player-info>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import GamePageTitle from "@/components/GamePageTitle.vue";
import MainPlayerCard from "@/components/MainPlayerCard.vue";
import GameNav from "@/components/GameNav.vue";
import GamePlayerInfo from "@/components/GamePlayerInfo.vue";

export default {
  name: "GameLayout",
  components: {
    GamePlayerInfo,
    GameNav,
    MainPlayerCard,
    GamePageTitle
  },
  computed: {
    ...mapState({
      player: state => state.player
    })
  },
  data() {
    return {
      loading: false
    };
  },
  created() {
    this.loading = true;
    this.fetchRaces().then(() => {
      this.fetchUnits().then(() => {
        this.fetchPlayer().then(() => {
          setTimeout(() => (this.loading = false), 1500);
        });
      });
    });
  },
  methods: {
    ...mapActions({
      fetchPlayer: "player/fetch",
      fetchRaces: "races/fetch",
      fetchUnits: "units/fetch"
    }),
    beforeEnterPage() {
      // todo: implement transition
    },
    enterPage() {
      // todo: implement transition
    },
    leavePage() {
      // todo: implement transition
    }
  },
  watch: {
    $route() {
      // react to route changes...
      this.fetchPlayer();
    }
  }
};
</script>

<style lang="scss" scoped>
@media (orientation: landscape) {
  .game {
    display: grid;
    grid-template-areas:
      'game-title page-title main-player-card'
      'game-nav game-view game-player-info';
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: auto;
    // height: 100%;
    position: relative;

    .game-title,
    .player-title,
    .game-nav,
    .game-player-info {
      padding: 0 5px; // consistent padding
    }

    .game-title,
    .page-title,
    .player-title {
      height: 25px;
      color: $outrageous-orange;
    }

    .game-title {
      grid-area: game-title;
      text-align: center;
      line-height: 2.5rem;
    }

    .main-player-card {
      grid-area: main-player-card;
    }

    .game-nav {
      grid-area: game-nav;
    }

    .game-view {
      grid-area: game-view;
    }

    .game-player-info {
      grid-area: game-player-info;
    }

    .game-nav,
    .game-view,
    .game-player-info {
      @media (orientation: landscape) {
        overflow-y: auto;
        // height: calc(100vh - 25px);
        position: relative;
        padding: 0 1em;
      }
    }
  }
}
</style>
