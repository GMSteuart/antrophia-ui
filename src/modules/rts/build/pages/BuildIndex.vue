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
import { mapActions, mapState, createNamespacedHelpers } from 'vuex'
import moment from 'moment'
import isEmpty from 'lodash/isEmpty'

import AntroButton from '@/components/base/AntroButton.vue'
import AntroCountdown from '@/components/base/AntroCountdown.vue'
import BuildTable from '../components/BuildTable.vue'
import { Build } from '@/types'

const {
  mapActions: mapBuildActions,
  mapState: mapBuildState
} = createNamespacedHelpers('pplayer/build')

@Component({
  components: {
    AntroButton,
    AntroCountdown,
    BuildTable
  },
  computed: {
    ...mapBuildState({
      build: state => state
    })
  },
  methods: {
    ...mapBuildActions({
      cancel: 'cancel',
      finish: 'finish'
    })
  }
})
export default class BuildIndex extends Vue {
  name: string = 'BuildIndex'

  build!: Build

  // TODO: need to update params passed here
  cancel!: () => Promise<any>
  finish!: () => Promise<any>

  get hasBuild() {
    return !isEmpty(this.build) && this.build.end !== null
  }

  get isFinished() {
    // TODO: get rid of moment
    return this.hasBuild && moment.utc(this.build.end) < moment.utc()
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
