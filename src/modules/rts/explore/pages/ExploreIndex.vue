<template>
  <div>
    <h3>Explore</h3>
    <div v-if="hasExplore">
      <p>Your scouts are currently exploring for more land.</p>
      <p>You will have to wait until they are back until you can explore for more. They should be back in:</p>
      <antro-countdown
        end-text="Explore Finished!"
        :short="false"
        :end-time="explore.end"
        @end="finish"
      ></antro-countdown>
      <antro-button class="error" @click.native="doCancel">Cancel Explore</antro-button>
    </div>
    <div v-else>
      <p>
        Explore the planet and to increase the amount of free land you have. Exploring for land that has yet to be-->
        claimed is safer than battling for land, but will come at a cost. Please specify how much Cardisium you
        would like to pay your scouts and for how long they should explore for:
      </p>
      <explore-form></explore-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import moment from "moment";
import isEmpty from "lodash/isEmpty";

import AntroButton from "@/components/base/AntroButton";
import AntroCountdown from "@/components/base/AntroCountdown";
import ExploreForm from "../components/ExploreForm";

export default {
  name: "ExploreIndex",
  components: {
    AntroButton,
    AntroCountdown,
    ExploreForm
  },
  computed: {
    ...mapState({
      explore: state => state.player.Explore
    }),
    hasExplore() {
      return !isEmpty(this.explore) && this.explore.end !== null;
    },
    isFinished() {
      return this.hasExplore && moment.utc(this.explore.end) < moment.utc();
    }
  },
  created() {
    if (this.isFinished) {
      this.finish();
    }
  },
  methods: {
    ...mapActions({
      cancel: "explore/cancel",
      finish: "explore/finish"
    }),
    doCancel() {
      // TODO: implement modal confirming cancel
      this.cancel();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>