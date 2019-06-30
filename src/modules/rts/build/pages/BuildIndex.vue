<template>
  <div class="build">
    <h3>Build</h3>
    <div v-if="hasBuild">
      <p>You are already constructing buildings!</p>
      <p>Expect construction to be done in:</p>
      <antro-countdown
        end-text="Build Finished!"
        :short="false"
        :end-time="build.end"
        @end="finish"
      ></antro-countdown>

      <antro-button class="error" @click.native="doCancel">Cancel Construction</antro-button>
    </div>
    <div v-else>
      <p>
        Here you can build all the structures you need to support and grow your population, military, and
        resources. Decrease the amount of time required for your build by increasing the money multiplier.
        While your build will be that many times more expensive, you will get your buildings faster.
      </p>

      <build-table></build-table>
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
import BuildTable from "../components/BuildTable";

export default {
  name: "BuildIndex",
  components: {
    AntroButton,
    AntroCountdown,
    BuildTable
  },
  computed: {
    ...mapState({
      build: state => state.player.Build
    }),
    hasBuild() {
      return !isEmpty(this.build) && this.build.end !== null;
    },
    isFinished() {
      return this.hasBuild && moment.utc(this.build.end) < moment.utc();
    }
  },
  created() {
    if (this.isFinished) {
      this.finish();
    }
  },
  methods: {
    ...mapActions({
      cancel: "build/cancel",
      finish: "build/finish"
    }),
    doCancel() {
      // TODO: implement modal confirming cancel
      this.cancel();
    }
  }
};
</script>