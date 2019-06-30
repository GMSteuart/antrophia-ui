<template>
  <div>
    <h1>Create Alliance</h1>
    <antro-fieldset legend="Create Alliance" name="alliance-add">
      <antro-input v-model="alliance.name" label="Alliance Name" type="text"></antro-input>

      <antro-input
        v-model="alliance.password"
        label="Alliance Password"
        type="password"
      ></antro-input>

      <antro-input
        v-model="alliance.password_confirm"
        label="Confirm Password"
        type="password"
      ></antro-input>

      <antro-textarea
        v-model="alliance.info"
        label="Alliance Description"
        placeholder="Describe your alliance"
      ></antro-textarea>

      <antro-button class="btn" @click.native="doCreate">Create Alliance</antro-button>
    </antro-fieldset>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, createNamespacedHelpers } from 'vuex'
import AntroFieldset from '@/components/base/AntroFieldset.vue'
import AntroInput from '@/components/base/AntroInput.vue'
import AntroButton from '@/components/base/AntroButton.vue'
import AntroTextarea from '@/components/base/AntroTextarea.vue'
import { AllianceForm } from '@/types'

const { mapActions: mapAlliancesActions } = createNamespacedHelpers('alliances')

@Component({
  components: {
    AntroTextarea,
    AntroButton,
    AntroInput,
    AntroFieldset
  },
  methods: {
    ...mapActions({
      create: 'create'
    })
  }
})
export default class AllianceAdd extends Vue {
  name: string = 'AlliancesAdd'
  form?: AllianceForm = undefined

  create!: (form: AllianceForm) => Promise<any>

  doCreate() {
    const { name, password, passwordConfirm, info } = this.form
    // todo: implement validation
    if (name && password && passwordConfirm) {
      this.create({ name, password, passwordConfirm, info })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
