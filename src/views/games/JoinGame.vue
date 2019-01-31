<template>
  <div class="join-game centered">
    <antro-fieldset legen="Join Game" name="join-game">
      <select v-model="race_id">
        <option disabled value>Please select a race</option>
        <option
          v-for="race in gamesRaces"
          :key="race.Race.id"
          :value="race.Race.id"
        >{{ race.Race.name }}</option>
      </select>

      <antro-button class="btn--submit antro-btn" @click.native="doJoin">Join Game</antro-button>
    </antro-fieldset>
    <router-link :to="{ name: 'lobby' }">Back to Lobby</router-link>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AntroFieldset from "@/components/base/AntroFieldset";
import AntroButton from "@/components/base/AntroButton";

export default {
  name: "JoinGame",
  components: {
    AntroButton,
    AntroFieldset
  },
  data() {
    return {
      race_id: ""
    };
  },
  computed: {
    ...mapState({
      races: state => state.races.all
    }),
    gamesRaces() {
      let _races = [];
      this.races.forEach(race => {
        if (race.Race.name !== "Zealot" && race.Race.name !== "Undying") {
          _races.push(race);
        }
      });

      return _races;
    }
  },
  created() {
    if (!this.races.length) {
      this.fetchRaces();
    }
  },
  methods: {
    ...mapActions({
      fetchRaces: "races/fetch",
      join: "games/join",
      warning: "alert/warning"
    }),
    doJoin() {
      this.join({
        game_id: this.$route.params.game_id,
        race_id: this.race_id
      }).then(response => {
        console.log(response);
        // if (response.status) {
        //   console.log(response)
        // }
        // else {
        //   this.warning(response.error.message)
        // }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.join-game {
  width: 350px;
}
</style>