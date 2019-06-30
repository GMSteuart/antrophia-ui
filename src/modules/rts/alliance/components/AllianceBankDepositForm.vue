<template>
  <div>
    <antro-fieldset legend="Deposit" name="bank-deposit">
      <p>How much Cardisium do you want to deposit?</p>
      <antro-input
        v-model="$v.amount.$model"
        label="Cardisium"
        type="number"
        :class="{ error: $v.amount.$error }"
      ></antro-input>
      <div v-if="!$v.amount.minValue" class="error">Deposit amount must be positive</div>

      <antro-button @click.native="doDeposit">Deposit</antro-button>
    </antro-fieldset>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapState } from "vuex";
import { validationMixin } from "vuelidate";
import { minValue, required } from "vuelidate/lib/validators";
import AntroFieldset from "@/components/base/AntroFieldset";
import AntroInput from "@/components/base/AntroInput";
import AntroButton from "@/components/base/AntroButton";

export default {
  name: "AllianceBankDepositForm",
  components: {
    AntroButton,
    AntroInput,
    AntroFieldset
  },
  mixins: [validationMixin],
  data() {
    return {
      amount: "",
      submitStatus: null
    };
  },
  computed: {
    ...mapState({
      player: state => state.player
    }),
    maxDeposit() {
      // TODO: determine max deposit
      return 0;
    },
    methods: {
      ...mapActions({
        deposit: "base/bank/desposit"
      }),
      doDeposit() {
        const { amount } = this;

        if (amount) {
          this.$v.touch();
          if (this.$v.$invalid) {
            this.submitStatus = "ERROR";
          } else {
            this.submitStatus = "PENDING";
            this.deposit(amount).then(() => (this.submitStatus = "OK"));
          }
        }
      }
    },
    validations: {
      amount: {
        required,
        minValue: minValue(1)
      }
    }
  }
};
</script>