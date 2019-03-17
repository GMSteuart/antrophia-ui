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
      <antro-input v-model="$v.money.$model" label="Cardisium" type="number" @input="update"></antro-input>
      <p>Estimated Land Gain: {{ estimatedLandGain | numberFormat }}</p>
      <antro-button @click.native="submit">Send Scouts</antro-button>
    </antro-fieldset>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import AntroFieldset from "@/components/base/AntroFieldset";
import AntroInput from "@/components/base/AntroInput";
import AntroButton from "@/components/base/AntroButton";
import numberFormat from "@/filters/numberFormat";

export default {
  name: "ExploreForm",
  components: {
    AntroButton,
    AntroInput,
    AntroFieldset
  },
  filters: {
    numberFormat
  },
  mixins: [validationMixin],
  data() {
    return {
      time: 0,
      money: 0,
      submitStatus: null
    };
  },
  computed: {
    ...mapState({
      estimatedLandGain: state => state.explore.estimatedLandGain,
      speedfactor: state => state.player.Game.speedfactor
    }),
    timeError() {
      if (!this.$v.time.required) {
        return "Time is required";
      }
      // if (!this.$v.time.minValue) {
      //   return "Time must be at least " + this.$v.time.$params.minValue.min;
      // }
      return false;
    },
    timeLabel() {
      return "Time (in " + (this.speedfactor < 10 ? "hours)" : "minutes)");
    }
  },
  methods: {
    ...mapActions({
      start: "explore/start",
      calc: "explore/calc"
    }),
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        this.start({
          time: this.$v.time.$model,
          money: this.$v.money.$model
        }).then(() => (this.submitStatus = "OK"));
      }
    },
    update() {
      this.calc({
        time: this.$v.time.$model | 0,
        money: this.$v.money.$model | 0
      });
    }
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
};
</script>