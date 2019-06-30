<template>
  <div>
    <h3>Barracks</h3>
    <div v-if="hasTrain">
      <p>You are already training units!</p>
      <p>Expect training to be done in:</p>
      <antro-countdown
        end-text="Training Finished!"
        :short="false"
        :end-time="barracks.end"
        @end="finish"
      ></antro-countdown>

      <antro-button class="error" @click.native="doCancel">Cancel Train</antro-button>
    </div>
    <div v-else>
      <barracks-table></barracks-table>
    </div>

    <div>
      <army-stacking></army-stacking>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapState } from "vuex";
import moment from "moment";
import isEmpty from "lodash/isEmpty";

import AntroButton from "@/components/base/AntroButton";
import AntroCountdown from "@/components/base/AntroCountdown";
import ArmyStacking from "../components/ArmyStacking";
import BarracksTable from "../components/BarracksTable";

export default {
  name: "BarracksIndex",
  components: {
    AntroButton,
    AntroCountdown,
    ArmyStacking,
    BarracksTable
  },
  computed: {
    ...mapState({
      barracks: state => state.player.Barracks
    }),
    hasTrain() {
      return !isEmpty(this.barracks) && this.barracks.end !== null;
    },
    isFinished() {
      return this.hasTrain && moment.utc(this.barracks.end) < moment.utc();
    }
  },
  created() {
    if (this.isFinished) {
      this.finish();
    }
  },
  methods: {
    ...mapActions({
      cancel: "barracks/cancel",
      finish: "barracks/finish"
    }),
    doCancel() {
      // todo: imeplement modal confirming cancel
      this.cancel();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>