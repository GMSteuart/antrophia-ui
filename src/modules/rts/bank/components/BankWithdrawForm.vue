<template>
  <div>
    <antro-fieldset
      legend="Withdraw"
      name="bank-withdraw"
    >
      <p>How much Cardisium do you want to withdraw?</p>
      <antro-input
        v-model="money"
        label="Cardisium"
      ></antro-input>

      <antro-button
        @click.native="doWithdraw"
      >
        Withdraw
      </antro-button>
    </antro-fieldset>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  import { mapActions, mapState } from 'vuex'
  import AntroFieldset from "@/components/base/AntroFieldset";
  import AntroInput from "@/components/base/AntroInput";
  import AntroButton from "@/components/base/AntroButton";

  export default {
    name: "BankWithdrawForm",
    components: {
      AntroButton,
      AntroInput,
      AntroFieldset
    },
    data() {
      return {
        money: null,
      }
    },
    computed: {
      ...mapState({
        bank: state => state.bank,
        player: state => state.player
      })
    },
    created() {
      if (typeof this.bank.info === 'undefined') {
        this.fetchInfo()
      }
    },
    methods: {
      ...mapActions({
        fetchInfo: 'bank/fetch',
        withdraw: 'bank/withdraw'
      }),
      doWithdraw() {
        const { money } = this

        if (money) {
          this.withdaw(money)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>