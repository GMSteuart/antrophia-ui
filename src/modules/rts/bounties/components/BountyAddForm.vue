<template>
  <div>
    <antro-fieldset legend="Add Bounty" name="bounty-add">
      <antro-select
        v-model="player_id"
        label="Player"
        disabledText="Select a player..."
        :options="playerList"
      ></antro-select>
      <antro-input
        v-model="$v.cardisium.$model"
        label="Cardisium"
        type="number"
        :class="{ error: $v.cardisium.$error }"
      ></antro-input>
      <antro-button @click.native="doSubmit">Add Bounty</antro-button>
    </antro-fieldset>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapGetters, mapState } from "vuex";
import { validationMixin } from "vuelidate";
import { minValue, required } from "vuelidate/lib/validators";

import AntroFieldset from "@/components/base/AntroFieldset";
import AntroInput from "@/components/base/AntroInput";
import AntroSelect from "@/components/base/AntroSelect";
import AntroButton from "@/components/base/AntroButton";

export default {
  name: "BountyAddForm",
  components: {
    AntroButton,
    AntroInput,
    AntroFieldset,
    AntroSelect
  },
  mixins: [validationMixin],
  data() {
    return {
      player_id: "",
      cardisium: ""
    };
  },
  computed: {
    ...mapGetters({
      playerList: "players/list"
    }),
    ...mapState({
      game_id: state => state.player.Game.id,
      player: state => state.player,
      players: state => state.players.all
    }),
    maxBounty() {
      return 0;
    }
  },
  created() {
    if (!this.players.length) {
      this.fetchPlayers(this.game_id);
    }
  },
  methods: {
    ...mapActions({
      addBounty: "bounties/add",
      fetchPlayers: "players/fetch"
    }),
    doSubmit() {
      const { cardisium, player_id } = this;

      if (cardisium && player_id) {
        // TODO: finish validation: use ExploreForm as an example
        // this.$v.$touch();
        this.addBounty({ cardisium, player_id });
      }
    }
  },
  validations: {
    cardisium: {
      required,
      minValue: minValue(1)
    }
  }
};
</script>