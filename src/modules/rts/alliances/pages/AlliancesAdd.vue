<template>
  <div>
    <h1>Create Alliance</h1>
    <antro-fieldset
      legend="Create Alliance"
      name="alliance-add"
    >
      <antro-input
        v-model="name"
        label="Alliance Name"
        type="text"
      ></antro-input>

      <antro-input
        v-model="password"
        label="Alliance Password"
        type="password"
      ></antro-input>

      <antro-input
        v-model="password_confirm"
        label="Confirm Password"
        type="password"
      ></antro-input>

      <antro-textarea
        v-model="info"
        label="Alliance Description"
        placeholder="Describe your alliance"
      ></antro-textarea>

      <antro-button
        class="btn"
        @click.native="doCreate"
      >
        Create Alliance
      </antro-button>
    </antro-fieldset>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import AntroFieldset from "@/components/base/AntroFieldset"
  import AntroInput from "@/components/base/AntroInput";
  import AntroButton from "@/components/base/AntroButton";
  import AntroTextarea from "@/components/base/AntroTextarea";

  export default {
    name: "AlliancesAdd",
    components: {
      AntroTextarea,
      AntroButton,
      AntroInput,
      AntroFieldset
    },
    data() {
      return {
        name: null,
        password: null,
        password_confirm: null,
        info: null,
      }
    },
    methods: {
      ...mapActions({
        create: 'alliances/create'
      }),
      doCreate() {
        const { name, password, password_confirm, info } = this;
        // todo: implement validation
        if (name && password && password_confirm) {
          this.create({name, password, password_confirm, info })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>