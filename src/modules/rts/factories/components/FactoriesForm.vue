<template>
  <div>
    <antro-fieldset>
      <p>
        <b>Build Aid</b> - Setting your factory's build aid to higher than 0% will allow your factories
        to speed up construction times. It is recommended that this be set to 100% when you
        have no need for missiles or scanners.
      </p>
      <antro-input v-model="$v.build_pct.$model" label="Build Aid" name="build" type="number"></antro-input>

      <p>
        <b>Missiles</b> - If you have missiles bases, and set your factory's missiles percentage
        higher than 0%, they will begin to manufacture missiles.
      </p>
      <antro-input v-model="$v.missile_pct.$model" label="Missiles" name="missiles" type="number"></antro-input>

      <p>
        <b>Scanners</b> - If you have all the minerals needed to create scanners and your
        factory's scanner percentage is higher than 0%, they will begin to manufacture scanners.
      </p>
      <antro-input v-model="$v.scanner_pct.$model" label="Scanners" name="scanners" type="number"></antro-input>
      <div v-if="sum > 100" class="error">Factory percentage sum cannot exceed 100%!</div>
      <antro-button @click.native="submit">Update Factories</antro-button>
    </antro-fieldset>
  </div>
</template>

<script>
// TODO: implement sliders
// TODO: fix styling for error text
import { mapActions, mapState } from "vuex";
import { validationMixin } from "vuelidate";

import AntroButton from "@/components/base/AntroButton";
import AntroFieldset from "@/components/base/AntroFieldset";
import AntroInput from "@/components/base/AntroInput";

export default {
  name: "FactoriesForm",
  components: {
    AntroButton,
    AntroFieldset,
    AntroInput
  },
  mixins: [validationMixin],
  computed: {
    ...mapState({
      factory: state => state.player.Factory
    }),
    sum() {
      return (
        Number(this.build_pct) +
        Number(this.missile_pct) +
        Number(this.scanner_pct)
      );
    }
  },
  data() {
    return {
      build_pct: "",
      missile_pct: "",
      scanner_pct: ""
    };
  },
  mounted() {
    this.build_pct = this.factory.build_pct | 0;
    this.missile_pct = this.factory.missile_pct | 0;
    this.scanner_pct = this.factory.scanner_pct | 0;
  },
  methods: {
    ...mapActions({
      update: "factories/update"
    }),
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        this.update({
          build_pct: this.$v.build_pct.$model,
          missile_pct: this.$v.missile_pct.$model,
          scanner_pct: this.$v.scanner_pct.$model
        }).then(() => (this.submitStatus = "OK"));
      }
    }
  },
  validations: {
    build_pct: {},
    missile_pct: {},
    scanner_pct: {}
  }
};
</script>
