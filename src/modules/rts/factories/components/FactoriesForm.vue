<template>
  <div>
    <antro-fieldset>
      <p>
        <b>Build Aid</b> - Setting your factory's build aid to higher than 0% will allow your factories
        to speed up construction times. It is recommended that this be set to 100% when you
        have no need for missiles or scanners.
      </p>
      <antro-input
        v-model="$v.build_pct.$model"
        label="Build Aid"
        name="build"
        type="number"
      ></antro-input>

      <p>
        <b>Missiles</b> - If you have missiles bases, and set your factory's missiles percentage
        higher than 0%, they will begin to manufacture missiles.
      </p>
      <antro-input
        v-model="$v.missile_pct.$model"
        label="Missiles"
        name="missiles"
        type="number"
      ></antro-input>

      <p>
        <b>Scanners</b> - If you have all the minerals needed to create scanners and your
        factory's scanner percentage is higher than 0%, they will begin to manufacture scanners.
      </p>
      <antro-input
        v-model="$v.scanner_pct.$model"
        label="Scanners"
        name="scanners"
        type="number"
      ></antro-input>
      <div
        v-if="sum > 100"
        class="error"
      >Factory percentage sum cannot exceed 100%!</div>
      <antro-button @click.native="submit">Update Factories</antro-button>
    </antro-fieldset>
  </div>
</template>

<script lang="ts">
// TODO: implement sliders
// TODO: fix styling for error text
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'

import { mapActions, mapState, createNamespacedHelpers } from 'vuex'
import { validationMixin } from 'vuelidate'

import AntroButton from '@/components/base/AntroButton.vue'
import AntroFieldset from '@/components/base/AntroFieldset.vue'
import AntroInput from '@/components/base/AntroInput.vue'
import { Factories, FactoriesState, Factory, RequestState } from '@/types/index'

const {
  mapActions: mapFactoriesActions,
  mapState: mapFactoriesState
} = createNamespacedHelpers('factories')

@Component({
  components: {
    AntroButton,
    AntroFieldset,
    AntroInput
  },
  computed: {
    ...mapFactoriesState({
      factory: (state: FactoriesState) => state.all
    })
  },
  methods: {
    ...mapFactoriesActions({
      updateFactories: 'update'
    })
  }
})
export default class FactoriesForm extends mixins(validationMixin) {
  name: string = 'FactoriesForm'
  build_pct: number = 0
  missile_pct: number = 0
  scanner_pct: number = 0
  // TODO: determine best way to handle submit for modules/components
  submitStatus: RequestState = RequestState.None

  validations: any = {
    // TODO: complete validations
    build_pct: {},
    missile_pct: {},
    scanner_pct: {}
  }

  factory!: Factories
  update!: (form: Factories) => Promise<any> // todo: proper type
  $v!: any

  get sum(): number {
    return (
      Number(this.build_pct) +
      Number(this.missile_pct) +
      Number(this.scanner_pct)
    )
  }

  mounted() {
    this.build_pct = this.factory.build_pct | 0
    this.missile_pct = this.factory.missile_pct | 0
    this.scanner_pct = this.factory.scanner_pct | 0
  }
  async submit() {
    try {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = RequestState.Error
      } else {
        this.submitStatus = RequestState.Pending
        await this.update({
          build_pct: this.$v.build_pct.$model,
          missile_pct: this.$v.missile_pct.$model,
          scanner_pct: this.$v.scanner_pct.$model
        })
        this.submitStatus = RequestState.Success
      }
    } catch (err) {
      throw new Error(err)
    }
  }
}
</script>
