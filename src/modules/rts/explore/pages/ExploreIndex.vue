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

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapState, createNamespacedHelpers } from 'vuex'
import moment from 'moment'
import isEmpty from 'lodash/isEmpty'

import AntroButton from '@/components/base/AntroButton.vue'
import AntroCountdown from '@/components/base/AntroCountdown.vue'
import ExploreForm from '../components/ExploreForm.vue'
import { ExploreState, Explore } from '../../../../types/index'

const {
  mapActions: mapExploreActions,
  mapState: mapExploreState
} = createNamespacedHelpers('player/explore')

@Component({
  components: {
    AntroButton,
    AntroCountdown,
    ExploreForm
  },
  computed: {
    ...mapState({
      explore: (state: ExploreState): ExploreState => state
    })
  },
  methods: {
    ...mapExploreActions({
      cancel: 'cancel',
      finish: 'finish'
    })
  }
})
export default class ExploreIndex extends Vue {
  name: string = 'ExploreIndex'

  explore!: Explore
  cancel!: () => Promise<any>
  finish!: () => Promise<any>

  get hasExplore() {
    return !isEmpty(this.explore) && this.explore.end !== null
  }

  get isFinished() {
    return this.hasExplore && moment.utc(this.explore.end) < moment.utc()
  }

  created() {
    if (this.isFinished) {
      this.finish()
    }
  }

  doCancel() {
    // TODO: implement modal confirming cancel
    this.cancel()
  }
}
</script>

<style lang="scss" scoped>
</style>
