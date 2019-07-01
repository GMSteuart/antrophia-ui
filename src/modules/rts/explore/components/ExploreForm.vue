<template>
  <div>
    <antro-fieldset legend="Explore" name="explore">
      <antro-input
        v-model="$v.time.model"
        :label="timeLabel"
        type="number"
        :error="timeError"
        @input="update"
      ></antro-input>
      <antro-input
        v-model="$v.money.$model"
        label="Cardisium"
        type="number"
        @input="update"
      ></antro-input>
      <p>Estimated Land Gain: {{ estimatedLandGain | numberFormat }}</p>
      <antro-button @click.native="submit">Send Scouts</antro-button>
    </antro-fieldset>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'
import { mapActions, mapState, createNamespacedHelpers } from 'vuex'
import { validationMixin } from "vuelidate";
import { minValue, required } from "vuelidate/lib/validators";
import AntroFieldset from "@/components/base/AntroFieldset.vue";
import AntroInput from "@/components/base/AntroInput.vue";
import AntroButton from "@/components/base/AntroButton.vue";
import numberFormat from "@/filters/numberFormat";
import { Explore, ExploreState, PlayerState, RequestState } from '@/types'

const { mapActions: mapExploreActions, mapState: mapExploreState } = createNamespacedHelpers('explore')
const { mapState: mapPlayerState } = createNamespacedHelpers('player')

@Component({
  components: {
    AntroButton,
    AntroInput,
    AntroFieldset
  },
  filters: {
    numberFormat
  },
  computed: {
    ...mapState({
      estimatedLandGain: (state: ExploreState): number => state.estimatedLandGain,
      speedfactor: (state: PlayerState): number => state.Game ? state.Game.speedfactor
    })
  },
  methods: {
    ...mapExploreActions({
      start: "start",
      calc: "calc"
    })
  },
  validations: {
    time: {
      required
      // minValue: minValue(1)
    },
    money: {
      required
      // minValue: minValue(1)
    }
  }
})
export default class ExploreForm extends mixins(validationMixin) {
  name: string = "ExploreForm"

  form?: Explore = undefined
  submitStatus: RequestState = RequestState.None

  estimatedLandGain!: number
  speedfactor!: number

  start!: (form: Explore) => Promise<any>
  calc!: (form: Explore) => Promise<any>

  get timeError() {
      if (!this.$v.time.required) {
        return "Time is required";
      }
      // if (!this.$v.time.minValue) {
      //   return "Time must be at least " + this.$v.time.$params.minValue.min;
      // }
      return false;
    }

  get  timeLabel() {
      return "Time (in " + (this.speedfactor < 10 ? "hours)" : "minutes)");
    }

    async submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = RequestState.Error;
      } else {
        this.submitStatus = RequestState.Pending;
        // TODO: return response from start api
        await this.start({
          time: this.$v.time.$model,
          money: this.$v.money.$model
        })
        this.submitStatus = RequestState.Success
      }
    }

    update() {
      this.calc({
        time: this.$v.time.$model | 0,
        money: this.$v.money.$model | 0
      });
    }
};
</script>
