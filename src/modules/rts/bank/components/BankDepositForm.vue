<template>
  <div>
    <antro-fieldset legend="Deposit" name="bank-deposit">
      <p>How much Cardisium do you want to deposit?</p>
      <antro-input
        v-model="$v.money.$model"
        label="Cardisium"
        type="number"
        :class="{ error: $v.money.$error }"
      ></antro-input>
      <div
        v-if="!$v.money.minValue"
        class="error"
      >Deposit amount must be positive</div>

      <antro-button @click.native="doDeposit">Deposit</antro-button>
    </antro-fieldset>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapState } from 'vuex'
import { validationMixin } from 'vuelidate'
import { minValue, required } from 'vuelidate/lib/validators'
import isEmpty from 'lodash/isEmpty'
import AntroFieldset from '@/components/base/AntroFieldset'
import AntroInput from '@/components/base/AntroInput'
import AntroButton from '@/components/base/AntroButton'

export default {
  name: 'BankDepositForm',
  components: {
    AntroButton,
    AntroInput,
    AntroFieldset
  },
  mixins: [validationMixin],
  data() {
    return {
      money: '',
      submitStatus: null
    }
  },
  computed: {
    ...mapState({
      bank: state => state.bank,
      player: state => state.player
    }),
    maxDeposit() {
      if (
        !isEmpty(this.player.UserGame.max_bank_cardisium) &&
        !isEmpty(this.player.UserGame.bank_money)
      ) {
        return (
          this.player.UserGame.max_bank_cardisium -
          this.player.UserGame.bank_money
        )
      }
      return 0
    }
  },
  created() {
    if (typeof this.bank.info === 'undefined') {
      this.fetchInfo()
    }
  },
  methods: {
    ...mapActions({
      fetchInfo: 'bank/fetch',
      deposit: 'bank/deposit'
    }),
    doDeposit() {
      const { money } = this

      if (money) {
        this.$v.touch()
        if (this.$v.$invalid) {
          this.submitStatus = RequestState.Error
        } else {
          this.submitStatus = 'PENDING'
          this.deposit(money).then(() => (this.submitStatus = 'OK'))
        }
      }
    }
  },
  validations: {
    money: {
      required,
      minValue: minValue(1)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
