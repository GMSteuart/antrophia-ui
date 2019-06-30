<template>
  <div>
    <h1>Bank</h1>
    <p>Here you can deposit or withdraw cardisium from your banks or even transfer cardisium to other players.</p>
    <bank-deposit-form></bank-deposit-form>

    <bank-withdraw-form></bank-withdraw-form>

    <bank-transfer-form></bank-transfer-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  import BankDepositForm from "../components/BankDepositForm"
  import BankWithdrawForm from "../components/BankWithdrawForm";
  import BankTransferForm from "../components/BankTransferForm";

  export default {
    name: "BankIndex",
    components: {
      BankTransferForm,
      BankWithdrawForm,
      BankDepositForm,
    }
  }
</script>

<style lang="scss" scoped>

</style>